        // const numbers =[1,2,3,1,4];

        // console.log(numbers.indexOf(1));
        // console.log(numbers.lastIndexOf(1));

        // console.log(numbers.indexOf(1) !==-1);
        // console.log(numbers.includes(1));

        // console.log(numbers.indexOf(1,1));        //searches for elements of '1' after the 2nd element in the array

        // const courses = [
        //     {id: 1, name: 'a'},
        //     {id: 2, name: 'b'},
        //     {id: 3, name: 'c'},
        // ];

        // const course = courses.find(function(course)
        // {
        //     return course.name==='a';
        // });

        // console.log(course);

         const courses = [
            {id: 1, name: 'a'},
            {id: 2, name: 'b'},
            {id: 3, name: 'c'},
        ];

        const course = courses.find(course => course.name === 'a');
        console.log(course);



