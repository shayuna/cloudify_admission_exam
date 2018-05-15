import React,{Component} from "react";
import { connect } from 'react-redux';
import { setSelectedNode } from './actions';
import Node from "./Node";

class NodeAlterEgo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:props.id,
        }
    }
    render(){
        let highlight={};
        if (this.props.selectedID===this.props.id)highlight=styles.highlight;
        return (
            <article style={styles.node}>
                <article style={highlight} onClick={()=>this.props.setSelectedNode(this.props.id)}>{this.props.name}</article>
                {
                    this.props.NodesManager.getNodeByID(this.state.id).children.map((elm)=>(
                        <Node key={elm.id} id={elm.id} name={elm.name}/>
                    ))
                }
            </article>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        NodesManager: state.NManager,
        selectedID:state.nodeSelection,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedNode:(id)=>dispatch(setSelectedNode(id))
    };
};


const styles = {
    node:{
        fontSize:"1.5rem",
        marginLeft:"20px",
        cursor:"pointer",
    },
    highlight:{
        background:"red",
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NodeAlterEgo);

