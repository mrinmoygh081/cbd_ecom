import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { deleteAPI, getAPI, postAPI, putAPI } from "../../utils/fetchAPIs";
import { toast } from "react-toastify";
import { inputChange, reConfirm } from "../../Helper/smallFun";

export const Category = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [addForm, setAddForm] = useState({
    name: "",
    parentId: "0",
  });
  const [editForm, setEditForm] = useState({
    name: "",
    parentId: "0",
  });

  const getCategories = async () => {
    const d = await getAPI("allCategory", token);
    if (d?.status) {
      setData(d?.data);
    } else {
      toast.warning("Please check your internet connection!");
    }
  };

  const editIcon = (item) => {
    let temp = { ...item };
    temp.parentId = item.parent_id.toString();
    temp.cat_id = item.cat_id.toString();
    setEditForm(temp);
  };

  useEffect(() => {
    getCategories();
  }, [token]);

  const deleteCatHandler = async (id) => {
    const d = await deleteAPI(`admin/category/${id}`, token);
    if (d?.status) {
      toast.success("The category deleted successfully");
      getCategories();
    } else {
      toast.warn(d?.msg);
    }
  };

  const addBtn = async () => {
    if (addForm?.name !== "") {
      const data = await postAPI("admin/category", addForm, token);
      if (data?.status) {
        toast.success("The product is added succesfully");
        await getCategories();
        setAddForm({
          name: "",
          parentId: "0",
        });
      } else {
        toast.error("Product data is not added. Try Again!");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  const updateBtn = async () => {
    if (editForm?.name !== "") {
      const data = await putAPI(
        `admin/category/${editForm?.cat_id}`,
        editForm,
        token
      );
      if (data?.status) {
        toast.success("Product Line is updated succesfully");
        await getCategories();
        setEditForm({
          name: "",
          parentId: "0",
        });
      } else {
        toast.error("Product data is not updated. Try Again!");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <Header />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Category</li>
          </ol>

          <div className="card mb-3 overflow">
            <div className="card-header">
              <div></div>
              <form className="form-inline my-2 my-lg-0 mr-lg-2">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search for..."
                  />
                  <span className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="card-body mb-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="screen_header shadow mb-3">
                    <h3>Add Category</h3>
                    <div className="form-floating mb-3 pt-2 w-100">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="floatingInput"
                        placeholder=""
                        value={addForm?.name}
                        onChange={(e) => inputChange(e, addForm, setAddForm)}
                      />
                      <label htmlFor="floatingInput">Category Name</label>
                    </div>

                    <button
                      onClick={addBtn}
                      className="btn fw-bold btn-primary"
                    >
                      ADD
                    </button>
                  </div>
                  {editForm?.name !== "" && (
                    <div className="screen_header shadow">
                      <h3>Edit Category</h3>

                      <div className="form-floating mb-3 pt-2 w-100">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="floatingInput"
                          placeholder=""
                          value={editForm?.name}
                          onChange={(e) =>
                            inputChange(e, editForm, setEditForm)
                          }
                        />
                        <label htmlFor="floatingInput">Category Name</label>
                      </div>
                      <div className="text-start py-3">
                        <button
                          onClick={updateBtn}
                          className="btn fw-bold btn-primary"
                        >
                          UPDATE
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="text-center">
                        <tr>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </tfoot>
                      <tbody className="text-center">
                        {data &&
                          data.map((item, i) => (
                            <Fragment key={i}>
                              <tr>
                                <td>{item?.name}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-primary me-2"
                                    onClick={() => editIcon(item)}
                                  >
                                    <i className="fa fa-pencil"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() =>
                                      reConfirm(
                                        item?.cat_id,
                                        deleteCatHandler,
                                        `You're deleting ${item?.name} permanently.`
                                      )
                                    }
                                  >
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            </Fragment>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © Digipro Design</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
