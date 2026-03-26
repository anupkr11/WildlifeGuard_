import programdata from "../models/ProgramData.js";

export const getProgramData = async (req, res) => {
  const data = await programdata.find({});
  res.json(data);
};
export const getProgramById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const program = await programdata.findOne({ ID: id });
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.json(program);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch program data", error: error.message });
  }
};

export const deleteProgram = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await programdata.findOneAndDelete({ ID: id });
    if (!deleted) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.json({ message: "Program deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete program", error: error.message });
  }
};
