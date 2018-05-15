import { combineReducers } from 'redux';
import { NManager,nodesHasErrored,nodeSelection,updateNodes,treeHasChanged } from './reducers';

export default combineReducers({
    NManager,
    nodesHasErrored,
    nodeSelection,
    updateNodes,
    treeHasChanged,
});