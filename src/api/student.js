import axios from "axios";
import apiConstants from "../static/apiConstants";

function index(setStudents) {
  const params = new URLSearchParams();
  const url = apiConstants.api_path + "students";

  axios
    .get(url, params)
    .then((res) => {
      console.log(res);
      setStudents(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function show() {}

function store() {}

function update() {}

function destroy() {}

export default [index, show, store, update, destroy];
