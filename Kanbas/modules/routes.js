import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

  //     app.post("/api/courses/:cid/modules", (req, res) => {
  //         const { cid } = req.params;
  //         const newModule = {
  //           ...req.body,
  //           course: cid,
  //           _id: new Date().getTime().toString(),
  //         };
  //         db.modules.push(newModule);
  //         res.send(newModule);
  //       });

  const createModule = async (req, res) => {
      const { cid } = req.params;
      const { moduleId } = req.body;
      const newModule = await dao.createModule(moduleId, cid, req.body);
      res.json(newModule);
  };

  //     app.get("/api/modules", (req, res) => {
  //         const modules = db.modules;
  //         res.send(modules);
  //     });

    const findAllModules = async (req, res) => {
      const modules = await dao.findAllModules();
      res.json(modules);
  };

  //     app.get("/api/courses/:cid/modules", (req, res) => {
  //         const { cid } = req.params;
  //         const modules = db.modules
  //         .filter((m) => m.course === cid);
  //         res.send(modules);
  //     });

  const findAllModulesByCourseId = async (req, res) => {
      const { cid } = req.params;
      const modules = await dao.findAllModulesByCourseId(cid);
      res.json(modules);
  };


  //     app.put("/api/modules/:mid", (req, res) => {
  //         const { mid } = req.params;
  //         const moduleIndex = db.modules.findIndex(
  //           (m) => m._id === mid);
  //         db.modules[moduleIndex] = {
  //           ...db.modules[moduleIndex],
  //           ...req.body
  //         };
  //         res.sendStatus(204);
  //       });

  const updateModule = async (req, res) => {
      const status = await dao.updateModule(req.params.mid, req.body);
      res.sendStatus(204);
  };


  //     app.delete("/api/modules/:mid", (req, res) => {
  //         const { mid } = req.params;
  //         db.modules = db.modules.filter((m) => m._id !== mid);
  //         res.sendStatus(200);
  //       });

  const deleteModule = async (req, res) => {
      const status = await dao.deleteModule(req.params.mid);
      res.sendStatus(200);
  };


app.post("/api/courses/:cid/modules", createModule);
app.get("/api/modules", findAllModules);
app.get("/api/courses/:cid/modules", findAllModulesByCourseId);
app.put("/api/modules/:mid", updateModule);
app.delete("/api/modules/:mid", deleteModule);

}