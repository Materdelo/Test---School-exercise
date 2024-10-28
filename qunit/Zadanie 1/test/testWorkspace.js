// Workspaces UnitTest
QUnit.module('WorkspaceTest. ', function() {
	const navigation = document.getElementById('workspaceNav');
	const wSpaces = document.getElementById('content');
	const noSpaces = document.getElementById('xcontent');
	
	QUnit.test('CheckIfBasicNodesExists.', function(assert){
		// assert.equal() assert.true()
		const buttonCount = document.querySelectorAll( '[data-sohbtn="workspace"]' );
		assert.ok(navigation, 'Węzeł nawigacyjny z przyciskami istnieje' );
		assert.ok(wSpaces, 'Węzeł z przestrzeniami roboczymi istnieje' );
	//	assert.ok(noSpaces, 'Węzeł z przestrzenią X istnieje' );
		assert.equal(buttonCount.length, 3, 'Liczba przycisków (szt. 3) do przełączania przestrzeni roboczych' );
	});
	QUnit.test('CheckIfNewNodesExists.', function(assert){
		const nextButton = navigation.querySelector('[href="#wa"]');
		createWrkspc();
		const newButton = navigation.querySelector('[data-sohno="3"]');
		const newSpace = wSpaces.querySelector('[data-sohno="3"]');
		const propsButton = {
			"sohbtn":"workspace",
			"sohgroup":"workspace",
			"sohno":"3"
			}
		const propsSpace = {
			"sohcanv":"workspace",
			"sohgroup":"workspace",
			"sohno":"3"
			}
		assert.ok(newButton, 'Węzeł Nowego przycisku istnieje' );
		assert.ok(newSpace, 'Węzeł Nowej przestrzeni roboczej istnieje' );
		assert.propEqual(newButton.dataset, propsButton, 'Węzeł Nowego przycisku posiada oczekiwane właściwości' );
		assert.propEqual(newSpace.dataset, propsSpace, 'Węzeł Nowej przestrzeni posiada oczekiwane właściwości' );
	});
  });