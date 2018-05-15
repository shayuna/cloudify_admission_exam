import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { nodesFetchData,addNode,updateNode,delNode,setTreeHasChanged } from './actions';
import Node from "./Node";
import Btn from "./Btn";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            showAddDialog:false,
            showUpdateDialog:false,
        }
        this.addNode=this.addNode.bind(this);
        this.updateNode=this.updateNode.bind(this);
        this.showAddDialog=this.showAddDialog.bind(this);
        this.showUpdateDialog=this.showUpdateDialog.bind(this);

    }
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/nodes');
    }
    render() {
        console.log(this.props.selectedID);
        if (this.props.NodesManager.arTrees){
            return (
                <article>
                    <article style={styles.actionBtnsWrapper}>
                        <Btn caption="ADD" onclick={this.showAddDialog} disabled={!this.props.selectedID}/>
                        <Btn caption="UPDATE" onclick={this.showUpdateDialog} disabled={!this.props.selectedID}/>
                        <Btn caption="DEL" onclick={()=>this.delNode()} disabled={!this.props.selectedID}/>
                    </article>
                    {
    //                    if (this.state.showAddDialog || this.state.showUpdateDialog){
                        this.props.selectedID && (this.state.showAddDialog || this.state.showUpdateDialog) && 
                            <article style={styles.dialogStyle}>
                                <input type="text" id="eName"/>
                                {this.state.showAddDialog && <button onClick={this.addNode}>ADD</button>}
                                {this.state.showUpdateDialog && <button onClick={this.updateNode}>UPDATE</button>}
                            </article>    
                      //  }
                    
                    
                    }
                    <article style={styles.allTreesWrapper}>
                    {
                        this.props.NodesManager.arTrees.map((elm) => (
                            <article key={elm.id} style={styles.treeWrapper}>
                                <Node id={elm.id} name={elm.name} rnd={Math.random()}/>
                            </article>
                        ))
                    }
                    </article>
                    <article style={styles.actionBtnsWrapper}>
                        <Btn caption="SAVE" onclick={()=>this.saveTree()} disabled={!this.props.treeHasChanged}/>
                    </article>
                </article>
            )
        }
        else{
            return null;
        }
    }
    showAddDialog(){
        this.setState({
            showAddDialog:true,
            showUpdateDialog:false,
        });
    }
    addNode(){
        this.props.addNode(document.getElementById("eName").value,this.props.selectedID);
        this.setTreeHasChanged();
    }
    showUpdateDialog(){
        this.setState({
            showAddDialog:false,
            showUpdateDialog:true,
        });
    }
    updateNode(){
      this.props.updateNode(this.props.selectedID,document.getElementById("eName").value);
      this.setTreeHasChanged();
    }
    delNode(){
        this.props.delNode(this.props.selectedID);
        this.setTreeHasChanged();
    }
    saveTree(){
        console.log(JSON.stringify(this.props.NodesManager.createFlatList()));
    }
    setTreeHasChanged(){
        this.props.setTreeHasChanged(true);
    }

}

const mapStateToProps = (state) => {
    return {
        NodesManager: state.NManager,
        selectedID:state.nodeSelection,
        treeHasChanged:state.treeHasChanged,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(nodesFetchData(url)),
        addNode: (name,pid) => dispatch(addNode(name,pid)),
        updateNode: (id,name) => dispatch(updateNode(id,name)),
        delNode: (id) => dispatch(delNode(id)),
        setTreeHasChanged:(bool)=>dispatch(setTreeHasChanged(bool)),
    };
};

const styles = {
    allTreesWrapper:{
        display:"flex",
    },
    treeWrapper:{
        margin:"1em",
    },
    actionBtnsWrapper:{
        padding:"2em",
        background:"#ddd",
    },
    dialogStyle:{
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

