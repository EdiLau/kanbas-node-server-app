import model from "./model.js";


export const createModule = (moduleId, courseId, moduleData) => {
    delete moduleData._id;
    delete moduleData.course;
    const newModule = {
        _id: moduleId,
        course: courseId,
        ...moduleData
    };
    return model.create(newModule);
};

export const findAllModulesByCourseId = (courseId) => {
    return model.find({ course: courseId });
};

export const findAllModules = () => {
    return model.find();
};

export const updateModule = (moduleId, moduleData) => {
    return model.findByIdAndUpdate(moduleId, moduleData, { new: true });
};

export const deleteModule = (moduleId) => {
    return model.findByIdAndDelete(moduleId);
};