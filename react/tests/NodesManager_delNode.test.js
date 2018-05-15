const NodesManager=require("../NodesManager");

test("check that del node works",()=>{
    const jExample=[
        {id:1,name:"my node1",pid:2},
        {id:2,name:"my node2",pid:null},
        {id:3,name:"my node3",pid:2},
        {id:4,name:"my node4",pid:null},
        {id:55,name:"my node55",pid:4},
        {id:67,name:"my node67",pid:4},
        {id:10,name:"my node10",pid:4},
        {id:11,name:"my node11",pid:10},
        {id:7,name:"my node7",pid:null},
    ];
    const nodeID=67;
    NodesManager.addFromList(jExample);
    expect(NodesManager.getNodeByID(nodeID).id).toBe(nodeID);
    NodesManager.delNodeByID(nodeID);
    expect(NodesManager.getNodeByID(nodeID)).toBe(null);
});
