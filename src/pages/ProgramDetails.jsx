import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProgramCharts from "../components/program/ProgramCharts";
import { useEffect } from "react";
import { fetchPrograms } from "../redux/programSlice";
import { useDispatch } from "react-redux";
import { deleteProgram } from "../redux/programSlice";
import { useNavigate } from "react-router-dom";



const ProgramDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);
  const { id } = useParams();

 
  const program = useSelector((state) =>
    state.programs.data.find((p) => String(p.ID) === id),
  );

  if (!program) {
    return (
      <p className="text-center mt-20 text-lg font-semibold">
        Program not found
      </p>
    );
  }

   const handleDelete = async (id, programName) => {
    dispatch(deleteProgram(id));
    //route to programs page after deletion using useNavigate
    navigate("/programs");
    alert(`${programName} has been successfully deleted`);
  };


  return (
    <div className="bg-gray-50 min-h-screen py-16 text-xl">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {/* TITLE */}
          <h1 className="text-4xl font-bold">{program["Program Name"]}</h1>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed">{program.Description}</p>

          {/* OBJECTIVES */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Objectives & Goals</h2>
            <p className="text-gray-700">{program["Objectives and Goals"]}</p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 h-fit text-xl">
          <h3 className="text-3xl font-semibold mb-2">Program Information</h3>

          <p>
            <strong>Country:</strong> {program["Country/Region"]}
          </p>
          <p>
            <strong>Agency:</strong> {program["Government Agency"]}
          </p>
          <p>
            <strong>Launched:</strong> {program["Year Launched"]}
          </p>
          <p>
            <strong>Duration:</strong> {program.Duration}
          </p>
          <p>
            <strong>Status:</strong> {program["Current Status"]}
          </p>
          <p>
            <strong>Funding:</strong> ${program["Funding (USD)"]}
          </p>
        </div>
      </div>
      <div className="width=max mx-100 mt-16">
        <ProgramCharts program={program} />
      </div>
      <div className="bg-white rounded-xl shadow-md p-8 width=max mx-100 mt-16">
        <h2 className="text-2xl font-bold mb-3">How to Participate</h2>

        <p className="text-gray-600 mb-6">
          Download our mobile app or call our hotline to report wildlife
          emergencies, participate in conservation activities, or support this
          initiative.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/join-team"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Become a Volunteer
          </Link>

          <Link
            to="/contact"
            className="border border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact Program Team
          </Link>
        </div>
        <button className= " mt-5 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition" onClick={()=>handleDelete(program.ID, program["Program Name"])}>Delete Program</button>
      </div>
    </div>
  );
};

export default ProgramDetails;
