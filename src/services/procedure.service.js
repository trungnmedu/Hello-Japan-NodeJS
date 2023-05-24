const SuccessResponse = require("@helpers/success.helper");
const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant");
const Procedure = require("@models/procedure");

class ProcedureService {
    static async createProcedure(type, procedure) {
        if (type === "STUDY") {
            const steps = [
                {
                    name: "Bước 1",
                    description: "Nạp giấy tờ cái nhân",
                    status: "PROCESSING"
                },
                {
                    name: "Bước 2",
                    description: "Liên hệ trường nhật ngữ để phỏng vấn.",
                    status: "PENDING"
                },
                {
                    name: "Bước 3",
                    description: "Xử lý hồ sơ và đăng ký thi JLPT.",
                    status: "PENDING"
                },
                {
                    name: "Bước 4",
                    description: "Nạp hồ sơ và bằng JLPT sang trường nhật ngữ.",
                    status: "PENDING"
                },
                {
                    name: "Bước 5",
                    description: "Trường nhật ngữ nộp hồ sơ lên cục xuất nhập cảnh và xin giấy COE.",
                    status: "PENDING"
                },
                {
                    name: "Bước 6",
                    description: "Trường gửi bản sao COE, giấy nạp học phí cho trung tâm.",
                    status: "PENDING"
                },
                {
                    name: "Bước 7",
                    description: "Du học sinh nộp học phí.",
                    status: "PENDING"
                },
                {
                    name: "Bước 8",
                    description: "Nhận COE gốc và trung tâm làm thủ tục xin visa.",
                    status: "PENDING"
                },
                {
                    name: "Bước 9",
                    description: "Xác nhận ngày sang nhật.",
                    status: "PENDING"
                }
            ]
            console.log(procedure);
            const studyProcedure = await Procedure.create(
                {
                    ...procedure,
                    type,
                    steps
                }
            )
            return SuccessResponse.builder(HTTP_CODE.CREATED, HTTP_REASON.CREATED, studyProcedure)
        }
    }

    static async getAllProcedureByAccountId(id) {
        const procedures = await Procedure.find({ accountId: id })
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, procedures)
    }

}


module.exports = ProcedureService