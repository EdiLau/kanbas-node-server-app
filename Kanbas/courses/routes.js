import * as dao from "/Users/rness123/2024/spring/webdev/kanbas-node-server-app/Kanbas/courses/dao.js";

export default function CourseRoutes(app) {

   // app.post("/api/courses", (req, res) => {
    //     const course = { ...req.body,
    //       _id: new Date().getTime().toString() };
    //     Database.courses.push(course);
    //     res.send(course);
    //   });    
    
  const postCourse = async (req, res) => {
      const course = await dao.postCourse(req.body);
      res.json(course);
  };

  

  // app.get("/api/courses", (req, res) => {
    //     const courses = Database.courses;
    //     res.send(courses);
    // });

  const getCourses = async (req, res) => {
      const courses = await dao.getCourses();
      res.json(courses);
  };

  // app.get("/api/courses/:id", (req, res) => {
    //     const { id } = req.params;
    //     const course = Database.courses
    //       .find((c) => c._id === id);
    //     if (!course) {
    //       res.status(404).send("Course not found");
    //       return;
    //     }
    //     res.send(course);
    // });

  const findCourse = async (req, res) => {
      const course = await dao.findCourse(req.params.id);
      if (!course) {
        res.status(404).json({ message: "Course not found" });
        return;
      }
      res.json(course);
  };

  // app.put("/api/courses/:id", (req, res) => {
    //     const { id } = req.params;
    //     const course = req.body;
    //     Database.courses = Database.courses.map((c) =>
    //       c._id === id ? { ...c, ...course } : c
    //     );
    //     res.sendStatus(204);
    // });

  const addCourse = async (req, res) => {
      const status = await dao.addCourse(req.params.id, req.body);
      res.json(status);
  };

    // app.delete("/api/courses/:id", (req, res) => {
    //     const { id } = req.params;
    //     Database.courses = Database.courses
    //       .filter((c) => c._id !== id);
    //     res.sendStatus(204);
    //   });


  const deleteCourse = async (req, res) => {
      const status = await dao.deleteCourse(req.params.id);
      res.json(status);
  };



    // app.post("/api/courses", (req, res) => {
    //     const course = { ...req.body,
    //       _id: new Date().getTime().toString() };
    //     Database.courses.push(course);
    //     res.send(course);
    //   });    


  app.post("/api/courses", postCourse);
  app.get("/api/courses", getCourses);
  app.get("/api/courses/:id", findCourse);
  app.put("/api/courses/:id", addCourse);
  app.delete("/api/courses/:id", deleteCourse);
}
