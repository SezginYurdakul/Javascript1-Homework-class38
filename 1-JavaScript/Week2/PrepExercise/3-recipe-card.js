const pilavRecipe = {};

pilavRecipe.title="Pilav";
pilavRecipe.servings=5;
pilavRecipe.ingredients=["500 gr rice","1/2 spoon salt", "2 spoon butter", "3 cup of water"];

    for (let item in pilavRecipe) {
    if (item === 'title') {
        console.log("Meal name: "+pilavRecipe[item]);
    } else if (item === 'servings') {
        console.log("Serves: "+pilavRecipe[item]);
    } else {
        const IngedientList = pilavRecipe[item];

        console.log('Ingedients:'+ IngedientList.join(', '));
    }
}


/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */