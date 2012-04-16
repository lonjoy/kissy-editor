KISSY.add('editor/plugin/list-utils/index', function (S, KE) {
    var listNodeNames = {ol:1, ul:1},
        KEN = KE.NODE,
        list = {
            /*
             * Convert a DOM list tree into a data structure that is easier to
             * manipulate. This operation should be non-intrusive in the sense that it
             * does not change the DOM tree, with the exception that it may add some
             * markers to the list item nodes when database is specified.
             * 扁平化处理，深度遍历，利用 indent 和顺序来表示一棵树
             */
            listToArray:function (listNode, database, baseArray, baseIndentLevel, grandparentNode) {
                if (!listNodeNames[ listNode._4e_name() ]) {
                    return [];
                }
                if (!baseIndentLevel)
                    baseIndentLevel = 0;
                if (!baseArray) {
                    baseArray = [];
                }
                // Iterate over all list items to and look for inner lists.
                for (var i = 0, count = listNode[0].childNodes.length;
                     i < count; i++) {
                    var listItem = new Node(listNode[0].childNodes[i]);

                    // It may be a text node or some funny stuff.
                    if (listItem._4e_name() != 'li') {
                        continue;
                    }
                    var itemObj = { 'parent':listNode,
                        indent:baseIndentLevel,
                        element:listItem, contents:[] };
                    if (!grandparentNode) {
                        itemObj.grandparent = listNode.parent();
                        if (itemObj.grandparent && itemObj.grandparent._4e_name() == 'li')
                            itemObj.grandparent = itemObj.grandparent.parent();
                    }
                    else {
                        itemObj.grandparent = grandparentNode;
                    }
                    if (database) {
                        listItem._4e_setMarker(database, 'listarray_index', baseArray.length, undefined);
                    }
                    baseArray.push(itemObj);

                    for (var j = 0, itemChildCount = listItem[0].childNodes.length, child;
                         j < itemChildCount; j++) {
                        child = new Node(listItem[0].childNodes[j]);
                        if (child[0].nodeType == KEN.NODE_ELEMENT &&
                            listNodeNames[ child._4e_name() ]) {
                            // Note the recursion here, it pushes inner list items with
                            // +1 indentation in the correct order.
                            list.listToArray(child, database, baseArray,
                                baseIndentLevel + 1, itemObj.grandparent);
                        } else {
                            itemObj.contents.push(child);
                        }
                    }
                }
                return baseArray;
            },

            // Convert our internal representation of a list back to a DOM forest.
            //根据包含indent属性的元素数组来生成树
            arrayToList:function (listArray, database, baseIndex, paragraphMode) {
                if (!baseIndex) {
                    baseIndex = 0;
                }
                if (!listArray || listArray.length < baseIndex + 1) {
                    return null;
                }
                var doc = listArray[ baseIndex ].parent[0].ownerDocument,
                    retval = doc.createDocumentFragment(),
                    rootNode = null,
                    currentIndex = baseIndex,
                    indentLevel = Math.max(listArray[ baseIndex ].indent, 0),
                    currentListItem = null;
                //,paragraphName = paragraphMode;

                while (true) {
                    var item = listArray[ currentIndex ];
                    if (item.indent == indentLevel) {
                        if (!rootNode
                            ||
                            //用于替换标签,ul->ol ,ol->ul
                            listArray[ currentIndex ].parent._4e_name() != rootNode._4e_name()) {

                            rootNode = listArray[ currentIndex ].parent._4e_clone(false, true);
                            retval.appendChild(rootNode[0]);
                        }
                        currentListItem = rootNode[0].appendChild(item.element._4e_clone(false, true)[0]);
                        for (var i = 0; i < item.contents.length; i++) {
                            currentListItem.appendChild(item.contents[i]._4e_clone(true, true)[0]);
                        }
                        currentIndex++;
                    } else if (item.indent == Math.max(indentLevel, 0) + 1) {
                        //进入一个li里面，里面的嵌套li递归构造父亲ul/ol
                        var listData = list.arrayToList(listArray, null,
                            currentIndex, paragraphMode);
                        currentListItem.appendChild(listData.listNode);
                        currentIndex = listData.nextIndex;
                    } else if (item.indent == -1 && !baseIndex &&
                        item.grandparent) {

                        if (listNodeNames[ item.grandparent._4e_name() ]) {
                            currentListItem = item.element._4e_clone(false, true)[0];
                        } else {
                            // Create completely new blocks here, attributes are dropped.
                            //为什么要把属性去掉？？？#3857
                            if (item.grandparent._4e_name() != 'td') {
                                currentListItem = doc.createElement(paragraphMode);
                                item.element._4e_copyAttributes(new Node(currentListItem));
                            }
                            else
                                currentListItem = doc.createDocumentFragment();
                        }

                        for (i = 0; i < item.contents.length; i++) {
                            var ic = item.contents[i]._4e_clone(true, true);
                            //如果是list中，应该只退出ul，保留margin-left
                            if (currentListItem.nodeType == KEN.NODE_DOCUMENT_FRAGMENT) {
                                item.element._4e_copyAttributes(new Node(ic));
                            }
                            currentListItem.appendChild(ic[0]);
                        }

                        if (currentListItem.nodeType == KEN.NODE_DOCUMENT_FRAGMENT
                            && currentIndex != listArray.length - 1) {
                            if (currentListItem.lastChild
                                && currentListItem.lastChild.nodeType == KEN.NODE_ELEMENT
                                && currentListItem.lastChild.getAttribute('type') == '_moz') {
                                DOM._4e_remove(currentListItem.lastChild);
                            }
                            DOM._4e_appendBogus(currentListItem);
                        }

                        if (currentListItem.nodeType == KEN.NODE_ELEMENT &&
                            DOM._4e_name(currentListItem) == paragraphMode &&
                            currentListItem.firstChild) {
                            DOM._4e_trim(currentListItem);
                            var firstChild = currentListItem.firstChild;
                            if (firstChild.nodeType == KEN.NODE_ELEMENT &&
                                DOM._4e_isBlockBoundary(firstChild)) {
                                var tmp = doc.createDocumentFragment();
                                DOM._4e_moveChildren(currentListItem, tmp);
                                currentListItem = tmp;
                            }
                        }

                        var currentListItemName = DOM._4e_name(currentListItem);
                        if (!UA['ie'] && ( currentListItemName == 'div' ||
                            currentListItemName == 'p' )) {
                            DOM._4e_appendBogus(currentListItem);
                        }
                        retval.appendChild(currentListItem);
                        rootNode = null;
                        currentIndex++;
                    }
                    else {
                        return null;
                    }
                    if (listArray.length <= currentIndex ||
                        Math.max(listArray[ currentIndex ].indent, 0) < indentLevel)
                        break;
                }

                // Clear marker attributes for the new list tree made of cloned nodes, if any.
                if (database) {
                    var currentNode = new Node(retval.firstChild);
                    while (currentNode && currentNode[0]) {
                        if (currentNode[0].nodeType == KEN.NODE_ELEMENT) {
                            currentNode._4e_clearMarkers(database, true);
                        }
                        currentNode = currentNode._4e_nextSourceNode();
                    }
                }

                return { listNode:retval, nextIndex:currentIndex };
            }
        };

    return list;
}, {
    requires:['editor']
});