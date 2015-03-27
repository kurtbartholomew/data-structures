describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  it('should seperate a child node from a tree', function(){
    tree.addChild(1);
    tree.addChild(9001);
    tree.addChild('potato');
    tree.addChild(Math.infinity);

    //[1,9001,"potato",infinity]

    var child=tree.children[0];
    child.addChild('another thing');

    child.removeFromParent();

    //[9001,"potato",infinity]

    expect(tree.children[0].value).to.equal(9001);
    expect(child.parent).to.equal(null);

  });

  it('should be able to iterate over every element recursively using tree.traverse', function(){
    var array=[];

    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[1].addChild(5);
    tree.children[2].addChild(6);

    var callBack=function( node ){
      array.push( node.value );
    };

    tree.traverse(callBack);

    var expectedResult=[null,1,4,2,5,3,6];

    expect(_.every(array,function(value,key) {
      return expectedResult[key]===value;
    }) && array.length>0).to.equal(true);

  });
});
