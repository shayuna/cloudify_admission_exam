const NodesManager=require("../NodesManager");

test("check that add createFlatList works",()=>{
    const jExample=[
        {id:1,name:"my node1",pid:null},
        {id:2,name:"my node2",pid:null},
        {id:3,name:"my node3",pid:null},
        {id:4,name:"my node4",pid:null},
        {id:55,name:"my node55",pid:null},
        {id:67,name:"my node67",pid:null},
        {id:10,name:"my node10",pid:null},
        {id:11,name:"my node11",pid:null},
        {id:7,name:"my node7",pid:null},
    ];
    NodesManager.addFromList(jExample);
    expect(JSON.stringify(jExample)).toBe(JSON.stringify(NodesManager.createFlatList()));
});
