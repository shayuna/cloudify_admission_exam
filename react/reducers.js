import NodesManager from "./NodesManager";



export function setLoadingErrorState(state = false, action) {
    switch (action.type) {
        case 'NODES_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function treeHasChanged(state = false, action) {
    switch (action.type) {
        case 'TREE_CHANGED':
            return action.hasChanged;

        default:
            return state;
    }
}


export function nodeSelection(state=null,action){
    switch(action.type){
        case "NODE_SELECTED":
            return state===action.selectedID ? null : action.selectedID;
        default:
            return null;
    }
}

export function updateNodes(state=null,action){
    switch(action.type){
        case "ADD_NODE":
            NodesManager.add(action.name,action.pid);
            return NodesManager;
        case "UPDATE_NODE":
            NodesManager.getNodeByID(action.id).name=action.name;
            return NodesManager;
        case "DEL_NODE":
            NodesManager.delNodeByID(action.id);
            return NodesManager;
        case "SAVE_NODES":
            const serializedNodes=JSON.stringify(NodesManager.createFlatList());
            $.post({url:"http://localhost:8080/nodes",
                method:"post",
                data:{serializedNodes:serializedNodes},
                error:function(oErr,sErr){
                },
                success:function(data){
                }
            });
            return NodesManager;
        default:
            return null;
    }
}

export function NManager(state = [], action) {
    switch (action.type) {
        case 'NODES_FETCH_DATA_SUCCESS':
            NodesManager.addFromList(action.nodes);
            return NodesManager;
        default:
            return state;
    }
}