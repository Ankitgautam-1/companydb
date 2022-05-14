"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_table_next_1 = __importDefault(require("react-bootstrap-table-next"));
const react_bootstrap_table2_paginator_1 = __importDefault(require("react-bootstrap-table2-paginator"));
require("./App.css");
const bi_1 = require("react-icons/bi");
require("react-bootstrap-table-next/dist/react-bootstrap-table2.min.css");
require("react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css");
const react_bootstrap_table2_filter_1 = __importStar(require("react-bootstrap-table2-filter"));
const md_1 = require("react-icons/md");
const react_redux_1 = require("react-redux");
const action_1 = __importStar(require("./store/actions/action"));
const io_1 = require("react-icons/io");
const react_bootstrap_1 = require("react-bootstrap");
const files_json_1 = __importDefault(require("./files.json"));
const city_json_1 = __importDefault(require("./city.json"));
const uuid_1 = require("uuid");
const supabase_js_1 = require("@supabase/supabase-js");
const axiosInit_1 = __importDefault(require("./Utils/axiosInit"));
function App() {
    const companiesData = (0, react_redux_1.useSelector)((state) => state.CompanyReducer);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [show, setShow] = (0, react_1.useState)(false);
    const [editShow, setEditShow] = (0, react_1.useState)(false);
    const [setSelected] = (0, react_1.useState)("Andaman and Nicobar Islands");
    const formref = (0, react_1.useRef)(null);
    const [cities, setCities] = (0, react_1.useState)(["Port Blair*"]);
    const [company_name, setcompany_name] = (0, react_1.useState)("");
    const [selectedRow, setSelectedRow] = (0, react_1.useState)();
    const [company_description, setcompany_description] = (0, react_1.useState)("");
    const [company_logo, setCompany_logo] = (0, react_1.useState)();
    const [company_email, setCompany_email] = (0, react_1.useState)("");
    const [company_phone, setCompany_phone] = (0, react_1.useState)(0);
    const [company_state, setCompany_state] = (0, react_1.useState)("Andaman and Nicobar Islands");
    const [company_city, setCompany_city] = (0, react_1.useState)("Port Blair*");
    const handleClose = () => {
        var _a;
        setShow(false);
        (_a = formref.current) === null || _a === void 0 ? void 0 : _a.reset();
        setSelected("Andaman and Nicobar Islands");
        setCities(["Port Blair*"]);
    };
    const handleShow = () => setShow(true);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    const editForm = (0, react_1.useRef)(null);
    const client = (0, supabase_js_1.createClient)("https://ugxqtrototfqtawjhnol.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NjQ0MzM2LCJleHAiOjE5NTUyMjAzMzZ9.7ZRfV8ekUJBSLVQWA6ylO5gdbE5BNnnD8lyZDflOgU0");
    (0, react_1.useEffect)(() => {
        fetch("http://localhost:3030/getCompany").then((res) => res.json().then((data) => dispatch((0, action_1.default)(data))));
    }, [dispatch]);
    const columns = [
        {
            dataField: "company_logo",
            text: "Logo",
            headerStyle: {},
            formatter: (cell, row) => {
                return (<div className="comapanyImage">
            <img src={row.company_logo} alt="logo" style={{ width: "50px", height: "50px" }}/>
          </div>);
            },
        },
        {
            dataField: "company_id",
            text: "Company ID",
            sort: true,
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            filter: (0, react_bootstrap_table2_filter_1.textFilter)({
                className: "CompanyIdTextFilter",
            }),
            formatter: (cell, row) => {
                return (<div style={{ maxWidth: "100%" }}>
            <textarea disabled value={row.company_id} style={{
                        maxHeight: "70px",
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        textOverflow: "ellipsis",
                    }}/>
          </div>);
            },
        },
        {
            dataField: "company_contact_number",
            text: "Contact Number",
            sort: true,
            filter: (0, react_bootstrap_table2_filter_1.textFilter)({
                className: "CompanyContactNumberFilter",
            }),
            formatter: (cell, row) => {
                return (<div style={{ maxWidth: "100%" }}>
            <input disabled value={row.company_contact_number} style={{
                        maxHeight: "70px",
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        textOverflow: "ellipsis",
                    }}/>
          </div>);
            },
        },
        {
            dataField: "company_name",
            text: "Name",
            sort: true,
            filter: (0, react_bootstrap_table2_filter_1.textFilter)({
                className: "CompanyContactNumberFilter",
            }),
            formatter: (cell, row) => {
                return (<div style={{ maxWidth: "100%" }}>
            <input disabled value={row.company_name} style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        textOverflow: "ellipsis",
                    }}/>
          </div>);
            },
        },
        {
            dataField: "company_state",
            text: "State",
            sort: true,
            filter: (0, react_bootstrap_table2_filter_1.textFilter)({
                placeholder: "Filter by State",
                className: "CompanyStateFilter",
            }),
            formatter: (cell, row) => {
                return (<div style={{ maxWidth: "100%" }}>
            <input disabled value={row.company_state} style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        textOverflow: "ellipsis",
                    }}/>
          </div>);
            },
        },
        {
            dataField: "company_city",
            text: "City",
            sort: true,
            filter: (0, react_bootstrap_table2_filter_1.textFilter)({
                placeholder: "Filter by City",
                className: "CompanyStateFilter",
            }),
            formatter: (cell, row) => {
                return (<div style={{ maxWidth: "100%" }}>
            <input disabled value={row.company_city} style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        textOverflow: "ellipsis",
                    }}/>
          </div>);
            },
        },
        {
            dataField: "company_email",
            text: "Email",
            sort: true,
            filter: (0, react_bootstrap_table2_filter_1.textFilter)({
                placeholder: "Filter by Email",
                className: "CompanyStateFilter",
            }),
            formatter: (cell, row) => {
                return (<div style={{ maxWidth: "100%" }}>
            <textarea disabled value={row.company_email} style={{
                        maxHeight: "70px",
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        textOverflow: "ellipsis",
                    }}/>
          </div>);
            },
        },
        {
            dataField: "company_description",
            text: "Description",
            sort: true,
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            filter: (0, react_bootstrap_table2_filter_1.textFilter)({
                className: "CompanyIdTextFilter",
            }),
            formatter: (cell, row) => {
                return (<div style={{ maxWidth: "100%" }}>
            <textarea disabled value={row.company_description} style={{
                        maxHeight: "200px",
                        fontSize: "11px",
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        textOverflow: "ellipsis",
                    }}/>
          </div>);
            },
        },
        {
            dataField: "",
            text: "Actions",
            formatter: (cell, row) => {
                return (<div className="editColumn">
            <bi_1.BiEdit style={{
                        marginRight: "10px",
                    }} size="20px" color="blue" onClick={() => {
                        setSelectedRow({
                            company_id: row.company_id,
                            company_name: row.company_name,
                            company_state: row.company_state,
                            company_city: row.company_city,
                            company_email: row.company_email,
                            company_description: row.company_description,
                            company_logo: row.company_logo,
                            company_contact_number: row.company_contact_number,
                        });
                        handleEditShow();
                    }}/>
            <md_1.MdDeleteOutline size="20px" color="red" onClick={() => __awaiter(this, void 0, void 0, function* () {
                        const res = yield axiosInit_1.default.delete(`/deleteCompany/${row.company_id}`);
                        if (res.status === 200) {
                            dispatch((0, action_1.deleteCompany)(row.company_id));
                        }
                        else {
                            alert("Error in deleting company");
                        }
                    })}/>
          </div>);
            },
        },
    ];
    const opt = (0, react_bootstrap_table2_paginator_1.default)({
        sizePerPageList: [5, 10, 15, 25],
        withFirstAndLast: true,
        alwaysShowAllBtns: true,
        firstPageText: "First",
        sizePerPage: 5,
        prePageText: "Pre",
        nextPageText: "Next",
        lastPageText: "Last",
        nextPageTitle: "First page",
        prePageTitle: "Pre page",
        firstPageTitle: "Next page",
        lastPageTitle: "Last page",
        showTotal: true,
        paginationTotalRenderer: (from, to, total) => {
            return (<div className="pagination-total">
          <span>
            Showing {from} to {to} of {total} entries
          </span>
        </div>);
        },
    });
    return (<div>
      <div className="BtnContainer">
        <button className="AddButton" onClick={handleShow}>
          <io_1.IoMdAddCircleOutline size={"20px"} style={{
            marginRight: "3px",
        }} color="white"/>{" "}
          Add Company
        </button>
      </div>
      <react_bootstrap_1.Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <react_bootstrap_1.Form ref={formref} onSubmit={(e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            if (company_phone.toString().length !== 10) {
                return alert("Phone number must be 10 digits");
            }
            else {
                const uid = (0, uuid_1.v4)();
                const upload_logo = yield client.storage
                    .from("travel-treat-storage")
                    .upload(`company_logo/${uid}/${uid}`, company_logo);
                console.log("upload_logo", upload_logo);
                if (upload_logo.error === null) {
                    const image_url = `https://ugxqtrototfqtawjhnol.supabase.co/storage/v1/object/public/travel-treat-storage/company_logo/${uid}/${uid}`;
                    axiosInit_1.default
                        .post("/addCompany", {
                        company_id: uid,
                        company_name: company_name,
                        company_contact_number: company_phone,
                        company_email: company_email,
                        company_state: company_state,
                        company_city: company_city,
                        company_description: company_description,
                        company_logo: image_url,
                    })
                        .then((res) => {
                        var _a;
                        console.log("res", res);
                        handleClose();
                        (_a = formref.current) === null || _a === void 0 ? void 0 : _a.reset();
                        dispatch((0, action_1.addCompany)({
                            company_id: uid,
                            company_name: company_name,
                            company_contact_number: company_phone.toString(),
                            company_email: company_email,
                            company_state: company_state,
                            company_city: company_city,
                            company_description: company_description,
                            company_logo: image_url,
                        }));
                    })
                        .catch((err) => {
                        alert(err.response.data);
                    });
                }
                else {
                    console.log("logo not uploaded", upload_logo.error);
                }
            }
        })}>
          <react_bootstrap_1.Modal.Header>
            <div className="FormHead">Add new company</div>
          </react_bootstrap_1.Modal.Header>
          <react_bootstrap_1.Modal.Body className="formbody">
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Company Name</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" autoFocus onChange={(e) => {
            setcompany_name(e.target.value);
        }} required placeholder="Enter name"/>
              </react_bootstrap_1.Form.Group>
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Email</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="email" onChange={(e) => {
            setCompany_email(e.target.value);
        }} required placeholder="Enter email"/>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Description</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control as="textarea" onChange={(e) => {
            setcompany_description(e.target.value);
        }} required placeholder="Enter the description" style={{ height: "60px", fontSize: "small" }}/>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Contact No</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="number" onChange={(e) => {
            setCompany_phone(e.target.value);
        }} required minLength={10} placeholder="9892" style={{ fontSize: "small" }}/>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} className="StateCol">
                <react_bootstrap_1.Form.Label>Logo</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control onChange={(e) => {
            if (e.target.files[0] !== null) {
                setCompany_logo(e.target.files[0]);
            }
        }} required type="file" accept="image/png,image/jpg,image/jpeg"></react_bootstrap_1.Form.Control>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} className="StateCol">
                <react_bootstrap_1.Form.Label>State</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Select onChange={(e) => {
            setSelected(e.target.value);
            const res = city_json_1.default.filter((city) => {
                return city.state === e.target.value;
            });
            setCompany_city(res[0].cities[0]);
            setCompany_state(e.target.value);
            setCities(res[0].cities);
        }}>
                  {files_json_1.default.map((state) => {
            return (<option key={state.code} value={state.name}>
                        {state.name}
                      </option>);
        })}
                </react_bootstrap_1.Form.Select>
              </react_bootstrap_1.Form.Group>

              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} className="StateCol">
                <react_bootstrap_1.Form.Label>City</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Select onChange={(e) => {
            setCompany_city(e.target.value);
        }}>
                  {cities.map((city) => {
            return (<option key={city} value={city}>
                        {city}
                      </option>);
        })}
                </react_bootstrap_1.Form.Select>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
          </react_bootstrap_1.Modal.Body>
          <react_bootstrap_1.Modal.Footer className="footer">
            <react_bootstrap_1.Button variant="text" onClick={handleClose}>
              Close
            </react_bootstrap_1.Button>
            <react_bootstrap_1.Button variant="primary" type="submit">
              Submit
            </react_bootstrap_1.Button>
          </react_bootstrap_1.Modal.Footer>
        </react_bootstrap_1.Form>
      </react_bootstrap_1.Modal>
      {/* Edit form----------------------------------------- */}
      <react_bootstrap_1.Modal show={editShow} onHide={handleEditClose} backdrop="static" keyboard={false}>
        <react_bootstrap_1.Form ref={editForm} onSubmit={(e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            axiosInit_1.default
                .patch("/updateCompany", {
                company_id: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_id,
                company_name: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_name,
                company_contact_number: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_contact_number,
                company_email: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_email,
                company_state: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_state,
                company_logo: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_logo,
                company_city: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_city,
                company_description: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_description,
            })
                .then((res) => {
                var _a;
                console.log("res", res);
                handleEditClose();
                (_a = editForm.current) === null || _a === void 0 ? void 0 : _a.reset();
                dispatch((0, action_1.updateCompany)({
                    company_id: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_id,
                    company_name: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_name,
                    company_contact_number: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_contact_number,
                    company_email: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_email,
                    company_state: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_state,
                    company_city: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_city,
                    company_description: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_description,
                    company_logo: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_logo,
                }));
            })
                .catch((err) => {
                alert(err.response.data);
            });
        })}>
          <react_bootstrap_1.Modal.Header>
            <div className="FormHead">Edit Company</div>
          </react_bootstrap_1.Modal.Header>
          <react_bootstrap_1.Modal.Body className="formbody">
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Company Name</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" defaultValue={(selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_name) || ""} autoFocus onChange={(e) => {
            setSelectedRow(Object.assign(Object.assign({}, selectedRow), { company_name: e.target.value }));
        }} required placeholder="Enter name"/>
              </react_bootstrap_1.Form.Group>

              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Email</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control defaultValue={(selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_email) || ""} type="email" onChange={(e) => {
            setSelectedRow(Object.assign(Object.assign({}, selectedRow), { company_email: e.target.value }));
        }} required placeholder="Enter email"/>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Description</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control defaultValue={(selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_description) || ""} as="textarea" onChange={(e) => {
            setSelectedRow(Object.assign(Object.assign({}, selectedRow), { company_description: e.target.value }));
        }} required placeholder="Enter the description" style={{ height: "60px", fontSize: "small" }}/>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col}>
                <react_bootstrap_1.Form.Label>Contact No</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control defaultValue={(selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_contact_number) || ""} type="number" onChange={(e) => {
            setSelectedRow(Object.assign(Object.assign({}, selectedRow), { company_phone: e.target.value }));
        }} required minLength={10} placeholder="9892" style={{ fontSize: "small" }}/>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>

            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} className="StateCol">
                <react_bootstrap_1.Form.Label>State</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Select defaultValue={(selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_state) || ""} onChange={(e) => {
            setSelected(e.target.value);
            const res = city_json_1.default.filter((city) => {
                return city.state === e.target.value;
            });
            setSelectedRow(Object.assign(Object.assign({}, selectedRow), { company_state: e.target.value, company_city: res[0].cities[0] }));
            setCities(res[0].cities);
        }}>
                  {files_json_1.default.map((state) => {
            return (<option key={state.code} value={state.name}>
                        {state.name}
                      </option>);
        })}
                </react_bootstrap_1.Form.Select>
              </react_bootstrap_1.Form.Group>
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} className="StateCol">
                <react_bootstrap_1.Form.Label>City</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Select defaultValue={(selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.company_city) || ""} onChange={(e) => {
            console.log("selected in city", selectedRow);
            setSelectedRow(Object.assign(Object.assign({}, selectedRow), { company_city: e.target.value }));
        }}>
                  {cities.map((city) => {
            return (<option key={city} value={city}>
                        {city}
                      </option>);
        })}
                </react_bootstrap_1.Form.Select>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
          </react_bootstrap_1.Modal.Body>
          <react_bootstrap_1.Modal.Footer className="footer">
            <react_bootstrap_1.Button variant="text" onClick={handleEditClose}>
              Cancel
            </react_bootstrap_1.Button>
            <react_bootstrap_1.Button variant="primary" type="submit">
              Update
            </react_bootstrap_1.Button>
          </react_bootstrap_1.Modal.Footer>
        </react_bootstrap_1.Form>
      </react_bootstrap_1.Modal>
      <div className="tableContainer">
        <react_bootstrap_table_next_1.default keyField="company_id" data={companiesData} striped hover columns={columns} pagination={opt} filter={(0, react_bootstrap_table2_filter_1.default)()}></react_bootstrap_table_next_1.default>
      </div>
    </div>);
}
exports.default = App;
