import { combineReducers } from 'redux';
import { NManager,setLoadingErrorState,nodeSelection,updateNodes,treeHasChanged } from './reducers';

export default combineReducers({
    NManager,
    setLoadingErrorState,
    nodeSelection,
    updateNodes,
    treeHasChanged,
});