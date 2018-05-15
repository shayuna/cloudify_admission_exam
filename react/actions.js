export const setTreeHasChanged = (bool) =>({
    type:"TREE_CHANGED",
    hasChanged:bool,
})

export const setSelectedNode = (selectedID)=>({
    type:"NODE_SELECTED",
    selectedID,
})

export const addNode = (name,pid)=>({
    type:"ADD_NODE",
    name,
    pid
});

export const updateNode = (id,name)=>({
    type:"UPDATE_NODE",
    id,
    name,
});

export const delNode = (id)=>({
    type:"DEL_NODE",
    id
})

const nodesFetchDataSuccess = (nodes) => ({
    type: 'NODES_FETCH_DATA_SUCCESS',
    nodes
});

const nodesHasErrored1 = (bool) =>({
    type: 'NODES_HAS_ERRORED',
    hasErrored: bool
});

export function nodesFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((nodes) => dispatch(nodesFetchDataSuccess(nodes)))
            .catch(() => dispatch(itemsHasErrored1(true)));
    };
}
