
# Problem definition
Let's say we are working on some students management solution. Exact solution is not of interest for us here, but planning such program we can guess that we will have to manipulate data related to students. In this manual we will look at storing such structured data.

Brief overview of simple arrays. Array can be thought of as *a list of elements* that are *of the same kind*.

# Brushing up on simple arrays - one dimensional arrays (1D array)
To start simple let's say we need list of our students:
```
const students = [ 'Albert', 'Marie', 'Issac', 'Nikola' ]

console.log(`First student in the list is ${students[0]}`)

// for...of loop
for(const student of students) {
  console.log(`${student} goes to our school`)
}
```
In this example we have *a list of* values that are all *`string`* type, that is meant to symbolize students.

Let's say that in our solution we also are interested in storing student specialization and their average grade.

# Solution \#1
One solution could be putting these data points (properties related to students) in arrays that hold that information. For example:
```
const students = [ 'Albert', 'Marie', 'Issac', 'Nikola' ]
const specializations = [ 'physics', 'radioactivity', 'alchemy', 'electromagnetism' ]
const averages = [ 10, 12, 7, 10 ]

console.log(`First student in the list is ${students[0]}, he is studying ${specializations[0]} and his average currently is ${averages[0]}`)

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i]} is studying ${specializations[i]} and his average currently is ${averages[i]}`
}
```
## Review of the solution \#1
Here we follow the principle that every array is *a list of the same type values* meaning the same type of data point.
  - Student names - _all `strings`_ - are kept together in the same list `const students`,
  - Specializations - _all `strings`_ - are kept together in the same list `const specializations`,
  - Averages - _all `numbers`_ - are kept together in the same list `const averages`,
  - Getting information related to the same student is not hard, we just use the same _index_, when working with any of the lists.

## Problems with solution \#1
Initially setting up lists like in this example is easy. When amount of data is small, it's not hard to reason what data points are related to each other (looking at program we can easily see that Albert is studying physics and he has 10). Imagine if we had a list of 1000 students, then without running a program it will be hard for the _code reader_ to tell what student Nr 100 is studying and what his average is.

To rephrase, in this solution, the information about the same student (his name, his specialization, his average) is *"disconnected"* in our program.

Another big problem is found when you start adding and removing students in the list. And making sure that averages and spcializations still in the same place from list begging. Imagine removing students name in the middle of the list and forgetting to remove his specialization and average. In this case every person after this will have wrong specialization and wrong average.

# Solution \#2 - trying to fix *"disconnected"* problem and two dimensional arrays (2d arrays)
Easiest way to connect information across your programs is to put them in the same list. Like in our example we have connected information on student names in `const students` list. But now we want to connect information about the same student. Following this reasoning lets put information related to our student Albert in the same list:
```
const student0 = [ 'Albert', 'physics', 10 ]

console.log(`${student0[0]} is studying ${student0[1]} and his average currently is ${student0[2]}`)
```
If you still remember our definition of an array you will see that we broke our rule of having the *same type of information* in *the same list*. It is a problem and we will try to fix it in later solution.

Also if you compare solutions #1 and #2 printing information about the same student we can see a very big difference for the reader:
```
// Solution #1
console.log(`${students[0]} is studying ${specializations[0]} and his average currently is ${averages[0]}`

// Solution #2
console.log(`${student0[0]} is studying ${student0[1]} and his average currently is ${student0[2]}`)
```
## Brief comparison so far
You can see that Solution #1 is much more readable in code and we only track index to get information for name, specialization and average.
In Solution #2 you have to guess what type of information is in index 0, 1 or 2. Big problem for any code reader.

So far we have only put single persons information in structure, how would solution would look for all the people.

## Full Solution \#2
```
// const studentX = [ <name>, <specialization>, <average> ]

const student0 = [ 'Albert', 'physics', 10 ]
const student1 = [ 'Marie', 'radioactivity', 12 ]

const students = [
  student0,
  student1,
  [ 'Issac', 'alchemy', 7 ],
  [ 'Nikola', 'electromagnetism', 10 ]
]

console.log(`First student in the list is ${students[0][0]}, he is studying ${students[0][1]} and his average currently is ${students[0][2]}`)


for(let i = 0; i < students.length; i++) {
  console.log(`${students[i][0]} is studying ${students[i][1]} and his average currently is ${students[i][2]}`)
}

// Or easier to read version using for...of loop
for(const student of students) {
  console.log(`${student[0]} is studying ${student[1]} and his average currently is ${student[2]}`)
}
```
## Review of the Solution \#2
Now information about the same student is *"connected"*. If we would need to add or remove students from the list `const students`, we will not introduce problems of tracking what information belongs to which student. It's also much more readable solution.

Though we have to remember what information is in which index. Adding more information per student (`// const studentX = [ <name>, <specialization>, <average>, <gender> ]`) could be difficult to manage as time goes.
Another difficulty, as mentioned, is that `console.log` is less readable then in solution \#1 as we need to remember index for information point.

# Solution \#3 - introduction to objects

In this solution we will fix the problem in solution \#2, where we have information _*NOT*_ *of the same type* in *the same list*. And as we will see it will fix another issues that we are having because of how we structured our data.

The main issue with the Solution \#2 is because of this decision:
```
// const studentX = [ <name>, <specialization>, <average> ]
const student0 = [ 'Albert', 'physics', 10 ]
```
Once we have information in place, what it means is lost in code. Imagine reading such code:
```
const mentor = [ 'Rasmus', 25, 200, 2, true ]
```
Unless you find some comments or documentation explaining this structure you are left to guessing.

Usually this is solved using objects. An object for our student could looks like this:
```
const student = { name: 'Albert', specialization: 'physics', average: 10 }
```
_*Object*_ can be thought of as *a list* of *various named values*. Named here means that it has a name for values it holds. In our example it is `name`, `specialization` and `average`.

Coming back to prior example with mentors, we could write it as this:
```
const mentor = {
  name: 'Rasmus',
  studentCount: 25,
  hoursWorked: 200,
  sideKickCount: 2,
  active: true
}
```
As you see having information in this structure is much more explaining. Now looking at such code we can reason what are we working on.

## Full solution using objects
```
const student0 = { name: 'Albert', specialization: 'physics', average: 10 }
const student1 = {
  name: 'Marie',
  specialization: 'radioactivity',
  average: 12
}

const students = [
  student0,
  student1,
  { name: 'Issac', specialization: 'alchemy', average: 7 },
  {
    name: 'Nikola',
    specialization: 'electromagnetism',
    average: 10,
  }
]

console.log(`First student in the list is ${students[0].name}, he is studying ${students[0].specialization} and his average currently is ${students[0].average}`)

// Alternative way
console.log(`First student in the list is ${students[0]['name']}, he is studying ${students[0]['specialization']} and his average currently is ${students[0]['average']}`)

for(let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} is studying ${students[i].specialization} and his average currently is ${students[i].average}`)
}

// Or easier to read version using for...of loop
for(const student of students) {
  console.log(`${student.name} is studying ${student.specialization} and his average currently is ${student.average}`)
}
```
## Review of Solution \#3
As you see now information is "connected" and clear what it represents. Furthermore, if you investigate `console.log` lines in this solution and compare to Solutions \#1 and \#2, you can easily see how much more readable the code is.
