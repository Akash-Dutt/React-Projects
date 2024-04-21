# React-Projects

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement) (Refresh the page automatically)
- File Watchiing Algorithm - written in C++
- Caching - Faster Builds
- Image Optimizations
- Minification in Production
- Bundline
- Compressing Files
- Consistent Hashing
- Code Spilitting
- Differential Bundling (supports older browsers)
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- different dev and production bundles

# Structure of Food Ordering App

- Header
- - Logo
- - Nav Items (Home, About, Cart)
- Body
- - Search
- - Restaurant Container
-      - Restaurant Card
-          - img
-          - name of res
-          - star rating
-          - cusine
-          - delivery time
-
- Footer
- - Copyright
- - Links
- - Address
- - Contact

# Two Types of Import

- default import/export
   <!-- export default <name of variable/component  -->
   <!-- import <name of variable/component> from <path> -->
- Named import/export
   <!-- export component -->
   <!-- import {<name of variable/component>} from <path> -->

# React Hooks

(Normal JS utility function)

- Two Important Hooks

  - useState()
  - useEffect()

  <!-- Normal list -->

  - let list = []; <!--creating normal list-->
  - list = ["abc"]; <!--updating normal list-->

  - const list = []; <!--creatingnormal const list-->
  - list.push("abc"); <!--updating const list-->

 <!-- UseState Hook -->

const[<name>, set<name>] = useState([objects here]);

<!-- useState() -->

- state variable is like superpowerfull variable that keep the UI sync with data layer
- Whenever a state varible updates, react re-renders the component
- How React is Doing this re-rendering of component when a State of Variable changes, it keep the sync of data layer and UI Layer. it do it with
  these concepts:-
  - Virtual DOM
  - Reconciliation Algorithm/ React Fibre
    - Virtual DOM is a representation of Actual DOM
    - React Elements are Virtual DOM
    - React Fibre Architecture
    - React Core Algorithm
    - Difference Algrithms which do efficient DOM Manipulation
      - Whenever react finds the change in the virtual DOM , it changes the UI
