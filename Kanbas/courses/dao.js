import model from "./model.js";

// make new one
export const postCourse = (courseData) => {
    delete courseData._id;
    return model.create(courseData);
};

// find all course
export const getCourses = () => {
    return model.find();
};

export const findCourse = (courseId) => {
    return model.findById(courseId);
};

// update
export const addCourse = (courseId, courseData) => {
    return model.updateOne({ _id: courseId }, { $set: courseData });
};

export const deleteCourse = (courseId) => {
    return model.deleteOne({ _id: courseId });
};
