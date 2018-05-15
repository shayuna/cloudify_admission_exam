const NodesManager=require("../NodesManager");

test ("check that add from list works",()=>{
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
    NodesManager.addFromList(jExample);
    expect(NodesManager.getNodeByID(1).pid).toBe(2);
    expect(NodesManager.getNodeByID(2).pid).toBe(null);
    expect(NodesManager.getNodeByID(3).pid).toBe(2);
    expect(NodesManager.getNodeByID(4).pid).toBe(null);
    expect(NodesManager.getNodeByID(55).pid).toBe(4);
    expect(NodesManager.getNodeByID(67).pid).toBe(4);
    expect(NodesManager.getNodeByID(10).pid).toBe(4);
    expect(NodesManager.getNodeByID(11).pid).toBe(10);
    expect(NodesManager.getNodeByID(7).pid).toBe(null);
});
