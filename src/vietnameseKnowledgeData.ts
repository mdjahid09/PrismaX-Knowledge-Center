export interface VietnameseArticleTranslation {
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  mainExplanation: string;
  keyConcepts: { heading: string; text: string }[];
  visualDesc: string;
}

export const vietnameseKnowledgeTranslations: Record<string, VietnameseArticleTranslation> = {
  "what-is-prismax": {
    title: "PrismaX là gì",
    subtitle: "PRISMAX_FOUNDATION_OVERVIEW",
    category: "Introduction & Core",
    overview: "PrismaX hoạt động như một lớp dịch vụ phi tập trung được tiêu chuẩn hóa được thiết kế để kết nối khoảng cách trừu tượng giữa các mô hình AI nền tảng và động học robot trong thế giới thực. Bằng cách tổng hợp đo lường và điều khiển xúc giác thành một dòng thông minh không gian thống nhất, chúng tôi kích hoạt vòng lặp học tập liên tục và phản hồi xúc giác hai chiều dưới 50ms.",
    mainExplanation: "PrismaX kết nối các nhà vận hành, người dùng robot, chủ sở hữu đội ngũ robot và các công ty AI trong một mạng lưới mở, phi tập trung. Thay vì buộc mỗi công ty robot phải xây dựng quy trình huấn luyện, nhà vận hành và đường ống dữ liệu riêng, PrismaX tiêu chuẩn hóa việc ghi lại dữ liệu đo lường và kết nối từ xa. Điều này chuyển đổi tính đa dạng phần cứng cơ khí thành các bản sao kỹ thuật số dự đoán được, hạ thấp rào cản ứng dụng robot dạng người và robot công nghiệp.",
    keyConcepts: [
      { heading: "Lớp trừu tượng thống nhất", text: "Tiêu chuẩn hóa giới hạn chấp hành, cấu hình khớp khớp và cấu trúc mô-men xoắn của các máy móc khác nhau thành một khung chung." },
      { heading: "Lớp điều phối mở", text: "Kết nối trực tiếp ba trụ cột chính: người điều khiển con người từ xa, máy chủ phần cứng đội ngũ robot cục bộ và khách hàng dữ liệu mạng thần kinh." },
      { heading: "Thu giữ giá trị phi tập trung", text: "Cho phép các chủ sở hữu đội ngũ robot phân tán kết nối trực tiếp thiết bị vào mạng lưới toàn cầu để tạo doanh thu trực tiếp mà không cần lo ngại pha loãng cổ phần." }
    ],
    visualDesc: "PrismaX chuyển đổi tọa độ không gian làm việc mục tiêu vật lý trực tiếp thành các xung vận hành động cơ thông qua chuyển đổi tọa độ cục bộ."
  },
  "physical-ai": {
    title: "AI Vật lý (Physical AI)",
    subtitle: "EMBODIED_INTELLIGENCE_MODEL",
    category: "Introduction & Core",
    overview: "Không giống như phần mềm thuần túy và các hệ thống hội thoại kỹ thuật số, AI Vật lý (Physical AI) đại diện cho các mô hình mạng thần kinh điều khiển các tài sản vật lý thực tế, liên tục tìm hiểu các định luật chuyển động trong không gian ba chiều.",
    mainExplanation: "AI Vật lý vận hành trực tiếp trong thực tế vật lý. Trí tuệ không chỉ giới hạn ở văn bản hoặc điểm ảnh, mà nó ảnh hưởng đến thế giới thông qua các định luật không gian, thời gian và lực tiếp xúc. PrismaX là hệ thống phát triển thống nhất cho AI Vật lý, cung cấp khả năng mở rộng không giới hạn cho huấn luyện robot.",
    keyConcepts: [
      { heading: "Hành động hiện thân (Embodied Action)", text: "Kết hợp chủ động hệ thống AI với thế giới thực thông qua di chuyển và tương tác xúc giác với môi trường vật lý." },
      { heading: "Vòng khép kín cảm giác thời gian thực (Real-Time Loop)", text: "Chuyển dịch ngay lập tức dữ liệu đầu vào của cảm biến thành hành động điều khiển để liên tục nhận phản hồi thích ứng từ môi trường." },
      { heading: "Đồng huấn luyện liên tục", text: "Mỗi phiên vận hành từ xa của con người tạo ra các mã quỹ đạo giúp cải thiện liên tục mô hình nền tảng." }
    ],
    visualDesc: "Tác nhân AI tương tác liên tục và duy trì cân bằng với môi trường vật lý để đảm bảo sự ổn định của hệ thống."
  },
  "teleoperation": {
    title: "Vận hành từ xa (Teleoperation)",
    subtitle: "BILATERAL_LATENCY_SCHEDULER :: UDP_TUNNEL",
    category: "Robot Control & Operations",
    overview: "Vận hành từ xa là hành động con người vận hành trực tiếp các robot vật lý từ xa với phản hồi hai chiều độ trễ cực thấp.",
    mainExplanation: "PrismaX cung cấp phản hồi lực xúc giác qua các đường truyền dữ liệu UDP độ trễ cực thấp. Nhà vận hành từ xa có thể cảm nhận trực tiếp lực cản và mô-men xoắn mà robot nhận thấy ở các đầu kẹp khớp nối. Điều này cho phép điều khiển chính xác lực hoạt động và ghi lại quỹ đạo thành dữ liệu huấn luyện chất lượng cao.",
    keyConcepts: [
      { heading: "Phản hồi xúc giác song phương", text: "Truyền ngay lập tức lực cản và xúc giác của robot trở lại thiết bị điều khiển từ xa của người vận hành." },
      { heading: "Truyền dữ liệu độ trễ cực thấp", text: "Tối ưu hóa thời gian truyền tín hiệu một chiều xuống dưới 50ms thông qua đường truyền UDP được tăng cấp cấu trúc." },
      { heading: "Hệ thống phanh giảm tốc an toàn", text: "Tự động áp dụng các bộ đệm giảm chấn hiệu chỉnh nếu độ trễ mạng tăng đột biến vượt quá 120ms để bảo vệ phần cứng." }
    ],
    visualDesc: "Đường truyền song phương đồng bộ hóa góc độ và lực tác động tần số cao giữa bàn điều khiển của nhà vận hành và thiết bị robot từ xa."
  },
  "data-layer": {
    title: "Lớp dữ liệu (Data Layer)",
    subtitle: "HIGH_FREQUENCY_TELEMETRY_DATAFRAME",
    category: "Robot Control & Operations",
    overview: "Kiến trúc dữ liệu cấp công nghiệp tần số cao để thu thập, tiêu chuẩn hóa, nén và lưu trữ an toàn các tập dữ liệu quỹ đạo chuyển động của robot.",
    mainExplanation: "Hệ thống chia nhỏ các chuỗi chuyển động liên tục của robot thành các Token quỹ đạo thời gian cực nhỏ. Nó đồng bộ hóa hoàn hảo góc khớp khớp, mô-men xoắn, máy ảnh trực quan và đầu vào cảm biến khác trên thang đo mili-giây. Các khung dữ liệu nén có độ chính xác cao giúp việc nạp vào pipeline huấn luyện AI cực kỳ dễ dàng.",
    keyConcepts: [
      { heading: "Phân tích Token quỹ đạo", text: "Chuyển đổi chuỗi tư thế không gian phức tạp thành các luồng vectơ nhỏ hơn phù hợp để mạng thần kinh đọc hiểu." },
      { heading: "Đồng bộ hóa sai lệch thời gian trực quan", text: "Giữ sai lệch thời gian giữa luồng video máy ảnh, áp lực cơ cấu chấp hành và dữ liệu lái khung gầm ở mức tối thiểu dưới một vài nano-giây." },
      { heading: "Nén dữ liệu không hao hao", text: "Tối ưu hóa dung lượng lưu trữ bộ đệm cạnh để đảm bảo các phản hồi lực tinh tế và độ rung khớp nối được giữ nguyên hoàn hảo." }
    ],
    visualDesc: "Sự hội tụ logic và nén gói của nhiều luồng dữ liệu cảm biến đầu vào và máy ảnh trực quan vào một tệp huấn luyện duy nhất."
  },
  "intelligence-layer": {
    title: "Lớp trí tuệ (Intelligence Layer)",
    subtitle: "LARGE_ACTION_MODEL_LAM_ENGINE",
    category: "Introduction & Core",
    overview: "Động cơ ra quyết định mô hình hành động lớn trung tâm chỉ đạo các hành vi của robot, suy luận không gian và lập kế hoạch chuyển động.",
    mainExplanation: "Lớp trí tuệ đại diện cho bộ não thuật toán cốt lõi của mạng lưới PrismaX. Thay vì chỉ phản ứng thụ động, nó dự đoán chính xác các quỹ đạo chuyển động ba chiều tiếp theo dựa trên dữ liệu không gian trực quan hiện tại. Được điều khiển bởi Mô hình Hành động Lớn (LAM), nó có thể đưa ra các kế hoạch hành động an sau độc lập trong các môi trường chưa từng gặp.",
    keyConcepts: [
      { heading: "Mô hình Hành động Lớn (LAM)", text: "Kết hợp dữ liệu lịch sử quỹ đạo nhằm dự đoán chính xác vectơ điều khiển quỹ đạo khớp khớp thế hệ tiếp theo." },
      { heading: "Cơ chế sửa lỗi thích ứng", text: "Ngay lập tức thực hiện sửa đổi đầu ra trực tuyến khi phát hiện lệch vật lý hoặc cản trở không mong muốn để bảo vệ phần cứng." },
      { heading: "Suy luận vòng lặp xúc giác", text: "Tự động điều chỉnh tốc độ khớp kẹp và mô-men xoắn dựa trên lực cản ma sát và trọng lượng vật thể được cảm nhận trong thời gian thực." }
    ],
    visualDesc: "Hệ thống AI xử lý dữ liệu trực quan thời gian thực và lực phản hồi để đưa ra quỹ đạo khớp nối mượt mà nhất."
  },
  "system-architecture": {
    title: "Kiến trúc hệ thống (System Architecture)",
    subtitle: "PRISMAX_CIRCULAR_FEEDBACK_ECOSYSTEM",
    category: "Introduction & Core",
    overview: "Hệ sinh thái tự thích ứng tuần hoàn kết nối chặt chẽ các robot thực tế, chuyên gia con người từ xa, kho lưu trữ dữ liệu và trí thông minh đám mây.",
    mainExplanation: "Kiến trúc này minh họa cách PrismaX hoạt động dựa trên nguyên lý vòng phản hồi khép kín. Nhà vận hành thực hiện điều chỉnh từ xa, lớp dữ liệu ghi lại hành trình đó thành Tokens, mạng lưới đám mây áp dụng dữ liệu để cập nhật mô hình học máy, và phiên bản mô hình mới được OTA cập nhật xuống để tăng năng lực hoạt động cho robot phần cứng.",
    keyConcepts: [
      { heading: "Tiến hóa vòng khép kín", text: "Liên kết liền mạch đầu ra cơ khí vật lý with việc điều chỉnh siêu tham số để nhanh chóng hội tụ và tự tối ưu hóa." },
      { heading: "Phân phối phi tập trung đa điểm", text: "Phát tán dữ liệu và triển khai nút mạng toàn cầu giúp hệ thống đạt độ ổn định cao, tránh điểm lỗi trung tâm." },
      { heading: "Bộ giải quyết không phụ thuộc phần cứng", text: "Chuyển đổi hướng dẫn làm việc trong không gian phẳng (tọa độ URDF) thành dữ liệu dịch chuyển chính xác cho bất kỳ cấu trúc hai chân hay bốn chân nào." }
    ],
    visualDesc: "Sơ đồ thể hiện chu trình tuần hoàn dữ liệu và điều khiển liên tục giữa nhà vận hành, đám mây AI, lưu trữ lạnh và robot cơ khí."
  },
  "robot-learning": {
    title: "Học máy Robot (Robot Learning)",
    subtitle: "REINFORCEMENT_TRAINING_CYCLE",
    category: "Future & Roadmap",
    overview: "Mạng lưới học máy hiệu suất cao tích hợp học tăng cường mô phỏng song song với dữ liệu mẫu từ vận hành từ xa giúp robot liên tục sửa sai.",
    mainExplanation: "Bằng cách kết hợp hành vi con người từ xa với huấn luyện củng cố trong môi trường ảo, robot nâng cao tốc độ học thói quen mới và thích nghi môi trường cực nhanh. Kỹ thuật của PrismaX xóa nhòa ranh giới mô-phỏng-thực-tế (Sim-to-Real), loại bỏ nhu cầu tinh chỉnh kéo dài khi đưa mô hình ảo ra máy thực tế.",
    keyConcepts: [
      { heading: "Tự chơi học tăng cường", text: "Để tác nhân robot tự khám phá phương án di chuyển trong môi trường ảo đa luồng để tìm ra giải pháp tối ưu nhất." },
      { heading: "Hiệu chuẩn khớp ảo-thực tế (Sim-to-Real)", text: "Sử dụng mô phỏng động lực động học để triệt tiêu các sai lệch lực ma sát và trọng lực nhỏ nhất giữa thực tế và mô hình ảo." }
    ],
    visualDesc: "Phân tích tự động sai lệch chuyển động thực tế với mô-phỏng hình học khớp để định vị sai số quỹ đạo chuyển động."
  },
  "digital-twins": {
    title: "Bản sao kỹ thuật số (Digital Twins)",
    subtitle: "REAL_TIME_URDF_SYNCHRONIZER",
    category: "Future & Roadmap",
    overview: "Đồng bộ hóa 3D thời gian thực dựa trên tệp mô tả phần cứng URDF cho phép theo dõi, dự đoán trạng thái cơ cấu chấp hành tại đám mây.",
    mainExplanation: "PrismaX khởi tạo một bản sao kỹ thuật số đối xứng hoàn hảo trong môi trường đám mây cho mỗi nút robot hoạt động trên mạng lưới. Bản sao này nhận dữ liệu trạng thái để phản chiếu tư thế 1-1, đồng thời chạy các thuật toán dự đoán động học trước vài mili-giây để phát hiện trước rủi ro va chạm hoặc mòn hỏng kết cấu.",
    keyConcepts: [
      { heading: "Đồng bộ hóa mô tả URDF tự động", text: "Tự động thiết lập hệ tọa độ bản học và biểu diễn khớp dựa trên tệp định nghĩa URDF của robot." },
      { heading: "Mô phỏng động học song song", text: "Giám sát trực quan hóa cấu trúc chuyển động của robot thực tế trên nền tảng đám mây 3D với độ trễ thấp." }
    ],
    visualDesc: "Bản sao 3D ảo phản chiếu hoàn hảo các chuyển động cơ khí thời gian thực của thiết bị vật lý bên dưới."
  },
  "human-in-the-loop": {
    title: "Sự tham gia của con người (Human-in-the-loop)",
    subtitle: "SUPERVISED_INTERVENTION_PROTOCOL",
    category: "Robot Control & Operations",
    overview: "Trụ cột an toàn cho phép người vận hành là con người kiểm soát hoặc can thiệp ngay lập tức khi phát hiện AI vận hành robot gặp bế tắc.",
    mainExplanation: "Không hệ thống tự trị nào là hoàn hảo. Giao thức PrismaX cho phép mô hình AI gửi tín hiệu phân quyền kiểm soát tới hàng đợi nhà vận hành con người khi chỉ số tin cậy hành động xuống thấp. Con người thực hiện một vài bước điều chỉnh mẫu qua micro-can thiệp, và AI lại tiếp tục hành trình một cách mượt mà.",
    keyConcepts: [
      { heading: "Giao nhận quyền kiểm soát động", text: "Chuyển giao quyền điều khiển khớp nối giữa AI và con người mượt mà không gây giật khớp robot." },
      { heading: "Giao tiếp trạng thái tin cậy", text: "Tính toán xác suất khả thi để kịp thời yêu cầu can thiệp trước khi robot thực hiện hành vi mất an toàn." }
    ],
    visualDesc: "Sơ đồ chuyển giao hành động mượt mà khi dòng điều khiển chuyển dịch giữa mạng thần kinh AI và tay cầm của con người."
  },
  "fleet-operations": {
    title: "Vận hành Đội ngũ (Fleet Operations)",
    subtitle: "DISTRIBUTED_ROBOTIC_ORCHESTRATOR",
    category: "Robot Control & Operations",
    overview: "Quản lý và điều phối đồng thời hàng nghìn robot phân tán thực hiện các nhiệm vụ công tác phức tạp khác nhau.",
    mainExplanation: "Sử dụng mạng lưới điều phối phân tán, PrismaX phân bổ công việc tối ưu dựa trên năng lực, định dạng URDF và mức sạc pin của từng robot có sẵn. Hệ thống tự động thiết lập kênh truyền đo lường xúc giác và cảnh báo tập trung, giúp một nhà vận hành đơn lẻ có thể quản lý hàng chục thiết bị cùng lúc.",
    keyConcepts: [
      { heading: "Điều phối phân phối động", text: "Định tuyến và phân chia khối lượng công việc thông minh dựa trên địa lý và chức năng của robot." },
      { heading: "Chẩn đoán tập trung vi mô", text: "Theo dõi dữ liệu rung động, áp lực động cơ và nhiệt độ của cả đội ngũ trong thời gian thực." }
    ],
    visualDesc: "Bảng điều khiển tập trung theo dõi các luồng trạng thái, báo lỗi và tọa độ vị trí của nhiều robot khác nhau."
  },
  "training-infrastructure": {
    title: "Hạ tầng huấn luyện (Training Infrastructure)",
    subtitle: "GPU_CLUSTER_DATA_LOOPER",
    category: "Introduction & Core",
    overview: "Cơ sở tính toán phân tán hiệu năng cao xử lý hàng petabyte dữ liệu quỹ đạo chuyển động của robot thành các thế hệ mô hình AI mới.",
    mainExplanation: "Dữ liệu góc khớp nối và video xúc giác gửi về từ mạng lưới được phân tách thành các khối dữ liệu song song cực lớn. Hệ thống huấn luyện liên tục cập nhật trọng số cho Mô hình Hành động Lớn (LAM) trên cụm GPU đám mây chuyên dụng, đảm bảo nâng cao năng lực thao tác của robot sau mỗi ngày hoạt động.",
    keyConcepts: [
      { heading: "Đường ống nạp dữ liệu tốc độ cao", text: "Xử lý nén dữ liệu xúc giác và video một cách đồng bộ không gây thắt cổ chai cho cụm tính toán GPU." },
      { heading: "Cập nhật mô hình gia tăng", text: "Cập nhật trọng số thích ứng từ các tập dữ liệu hoạt động mới thay vì phải huấn luyện lại từ đầu cực kỳ tốn kém." }
    ],
    visualDesc: "Mô tả dòng di chuyển dữ liệu từ các thiết bị ngoại vi qua bể dữ liệu lưu trữ rồi đi thẳng vào cụm máy tính GPU."
  },
  "action-models": {
    title: "Mô hình hành động (Action Models)",
    subtitle: "BEHAVIORAL_CLONING_TRANSFORMER",
    category: "Introduction & Core",
    overview: "Các mô hình học sâu chuyên biệt được xây dựng để xuất quỹ đạo số khớp nối cơ khí thay vì sinh từ ngữ hay điểm ảnh thông thường.",
    mainExplanation: "PrismaX phát triển dòng mạng thần kinh chuyên biệt Transformer Nhân bản Hành vi. Mô hình này coi các hành động cơ khí như một dạng ngôn ngữ không gian vật lý, chuyển đổi dữ liệu không gian trực quan thành các vectơ hành động khớp nối tiếp nối liền mạch, nâng cao độ linh hoạt khéo léo của đôi bàn tay robot học được.",
    keyConcepts: [
      { heading: "Vectơ hóa chuyển động", text: "Mã hóa góc quay khớp và lực tuyến tính thành các thẻ token chuỗi dữ liệu đầu vào cho mạng thần kinh." },
      { heading: "Dự phòng tự hồi quy", text: "Dự đoán trước tập hợp nhiều bước di chuyển tiếp theo để robot vận hành mượt mà ngay cả khi mất gói dữ liệu kết nối." }
    ],
    visualDesc: "Sơ đồ kiến trúc Transformer xử lý chuỗi hành vi học được từ người vận hành thành phân tích động lực."
  },
  "machine-perception": {
    title: "Sự nhận thức của Máy (Machine Perception)",
    subtitle: "3D_SPATIAL_MULTIMODAL_VISION",
    category: "Introduction & Core",
    overview: "Hệ thống mắt cơ học giúp robot chụp ảnh, phân tích chiều sâu ba chiều và nhận dạng kết cấu, vật liệu để thao tác an toàn.",
    mainExplanation: "Nhờ sự kết hợp giữa máy ảnh lập thể và các mạng thần kinh thị giác phân mảnh, PrismaX cung cấp cho robot khả năng ước lượng chính xác khoảng cách và nhận diện thuộc tính sản phẩm định vị. Robot không chỉ biết vật ở đâu mà còn hiểu nó cứng hay mềm, nặng hay nhẹ để áp dụng mô-men xoắn Grasp chính xác.",
    keyConcepts: [
      { heading: "Thị giác lập thể 3D", text: "Tính toán khoảng cách chiều sâu không gian dựa trên hai luồng video định vị song song." },
      { heading: "Phân loại thuộc tính vật dụng", text: "Nhận biết loại vật chất cấu tạo để xác định hành vi và lực cầm nắm kẹp phù hợp để tránh làm hỏng vật." }
    ],
    visualDesc: "Cách mạng lưới AI phân tích hình ảnh camera RGB thành mô hình đám mây điểm 3D mô tả tọa độ không gian."
  },
  "simulation-systems": {
    title: "Hệ thống mô phỏng (Simulation Systems)",
    subtitle: "PHYSICS_ENGINE_VIRTUAL_WORLD",
    category: "Robot Control & Operations",
    overview: "Các thế giới ảo có thiết kế vật lý siêu chân thực cho phép chạy thử nghiệm hàng triệu robot học việc đồng thời cùng lúc.",
    mainExplanation: "Hệ thống mô phỏng PrismaX tái tạo chính xác lực hấp dẫn, phản lực bề mặt và hệ số ma sát cơ khí thực tế. Bằng cách để robot huấn luyện ảo trong các nhà kho giả lập không gian, chúng tôi tích lũy được hàng triệu giờ thực hành mà không làm mòn khớp hay hỏng các thiết bị vật lý đắt tiền.",
    keyConcepts: [
      { heading: "Mô phỏng vật lý đa luồng", text: "Chạy đồng thời hàng nghìn kịch bản tương tác khớp trong phần mềm mô phỏng ảo hiệu năng cao." },
      { heading: "Giả lập nhiễu động cảm biến", text: "Bổ sung các mức độ nhiễu loạn cảm biến và ánh sáng nhân tạo giúp mô hình ảo dễ dàng thích ứng với sự khắc nghiệt ngoài đời." }
    ],
    visualDesc: "Hệ thống hiển thị cách các lực tác dụng cơ học được tính toán và phân phối tại các khớp của robot ảo."
  },
  "deployment-pipelines": {
    title: "Quy trình triển khai (Deployment Pipelines)",
    subtitle: "SECURE_OVER_THE_AIR_OTA_FIRMWARE",
    category: "Robot Control & Operations",
    overview: "Quy trình đóng gói và cập nhật trực tuyến OTA tuyệt đối an toàn để triển khai các phiên bản mô hình AI thông minh xuống robot.",
    mainExplanation: "Mỗi khi phiên bản AI mới được cụm máy tính GPU hoàn thiện, hệ thống triển khai PrismaX sẽ mã hóa và đóng gói thành phần mềm firmware tinh gọn. Quy trình tự động kiểm tra tương thích phần cứng và thực hiện nâng cấp gia tăng trực tuyến OTA không gây gián đoạn hay mất an toàn cho robot đang túc trực.",
    keyConcepts: [
      { heading: "Kiểm tra tương thích URDF", text: "Đảm bảo mô hình AI mới hoàn toàn tương thích với cấu tạo cơ khí vật lý trước khi nạp phần mềm." },
      { heading: "Triển khai gia tăng an toàn", text: "Nâng cấp thử nghiệm trên một nhóm nhỏ robot để giám sát hành vi trước khi nhân rộng trên toàn bộ hệ thống đội ngũ." }
    ],
    visualDesc: "Sơ đồ dòng chảy firmware từ máy chủ đóng gói an toàn đi qua mã hóa kết nối rồi nạp trực tiếp qua sóng OTA vào robot."
  },
  "physical-intelligence": {
    title: "Trí tuệ Vật lý (Physical Intelligence)",
    subtitle: "EMBODIED_GENERAL_INTELLIGENCE",
    category: "Introduction & Core",
    overview: "Khái niệm mô tả sự hợp nhất giữa khả năng suy luận cấp cao và khả năng tương tác khéo léo phối hợp cơ khí của robot.",
    mainExplanation: "Trí tuệ Vật lý chuyển hóa kiến thức logic thành các kỹ năng vận động. Nó định hình khả năng lập kế hoạch làm việc phức tạp của robot (như dọn dẹp phòng, sửa chữa máy hỏng) và đồng dịch nó ngay lập tức thành chuỗi hành động điều phối khớp tay chính xác, thể hiện mức độ độc lập cao.",
    keyConcepts: [
      { heading: "Hợp nhất logic và vận động", text: "Kết nối việc ra quyết định ở vỏ não ảo với các xung điều khiển cơ kẹp kẹp hành trình." },
      { heading: "Nhận thức lực thế giới", text: "Sự hiểu biết bẩm sinh về tương tác lực, điểm đòn bẩy và sức bền vật liệu của robot." }
    ],
    visualDesc: "Chuỗi phân tích đi từ ý định khái niệm trừu tượng (văn bản) dịch chuyển dần xuống các xung dòng điện mô-men xoắn thực tế."
  },
  "robotics-data-collection": {
    title: "Thu thập dữ liệu Robot (Robotics Data Collection)",
    subtitle: "CROWDSOURCED_TELEMETRY_MINING",
    category: "Robot Control & Operations",
    overview: "Chiến dịch toàn cầu thu hút dữ liệu chuyển động từ hàng nghìn chủ sở hữu robot thúc đẩy bể dữ liệu PrismaX lớn mạnh.",
    mainExplanation: "PrismaX tạo ra một cơ chế chia sẻ phần dữ liệu mở rộng. Bằng cách khuyến khích các chủ sở hữu robot và nhà vận hành gửi về các mẫu vận hành thành công cho những hoạt động thường ngày, chúng tôi tập hợp được tập dữ liệu phong phú nhất để liên tục mài giũa Mô hình Hành động Lớn (LAM).",
    keyConcepts: [
      { heading: "Hợp chuẩn dữ liệu cộng đồng", text: "Tự động phát hiện, lọc bỏ và chuẩn hóa định dạng các dữ liệu quỹ đạo gửi về từ thế giới bên ngoài." },
      { heading: "Bảo mật dữ liệu riêng tư", text: "Xóa bỏ hoàn toàn khuôn mặt con người và thông tin địa lý nhạy cảm ra khỏi video đo lường xúc giác trước khi nạp dữ liệu." }
    ],
    visualDesc: "Sơ đồ mô tả quy trình tiếp nhận dữ liệu cơ học phân tán toàn cầu, lọc nhiễu, mã hóa bảo mật rồi lưu trữ vào kho nạp huấn luyện."
  },
  "future-of-physical-ai": {
    title: "Tương lai của AI Vật lý",
    subtitle: "NEXT_DECADE_EMBODIED_ROADMAP",
    category: "Future & Roadmap",
    overview: "Tầm nhìn chiến lược mười năm tiếp theo thúc đẩy robot dạng người kết hợp AI hòa nhập sâu rộng vào đời sống con người.",
    mainExplanation: "Chúng ta đang bước vào kỷ nguyên nơi robot sẽ đồng hành cùng con người trong các hoạt động phức tạp từ dọn dẹp nhà cửa, chăm sóc y tế đến làm việc tại môi trường độc hại. PrismaX định hình hạ tầng cơ bản của mạng lưới này, đóng vai trò như một trục giao tiếp kiến thức chung cho các đời thiết bị robot.",
    keyConcepts: [
      { heading: "Xã hội hóa robot dạng người", text: "Hạ thấp chi phí chế tạo nhờ các mô hình AI dùng chung thông minh, phổ cập robot rộng rải." },
      { heading: "Hành lang pháp lý kết nối", text: "Xây dựng các tiêu chuẩn an toàn hành vi tuyệt đối cho robot khi tiếp xúc trực tiếp hay chăm sóc con người." }
    ],
    visualDesc: "Biểu đồ cột thời gian dự đoán mức độ thâm nhập và cải biến năng suất của các trợ lý cơ khí dạng người."
  },
  "eval-engine": {
    title: "Động cơ Đánh giá (Eval Engine)",
    subtitle: "QUANTITATIVE_BEHAVIORAL_METRICS",
    category: "Evaluations & Analytics",
    overview: "Hệ thống tự động chấm điểm và đánh giá độ chính xác, an toàn, hiệu suất của các thế hệ mô hình AI robot mới chế tạo.",
    mainExplanation: "Để đảm bảo các bản nâng cấp mô hình thực sự an toàn và hiệu quả, Động cơ Đánh giá chạy kiểm thử mô hình AI mới trên hàng loạt kịch bản vận động khắt khe (chống va đập, giữ thăng bằng, độ nhạy cầm nắm). Các chỉ số đánh giá định lượng nghiêm ngặt ngăn chặn lỗi suy thoái trước khi phát hành diện rộng.",
    keyConcepts: [
      { heading: "Chỉ số tin cậy vận động", text: "Đánh giá mức sai lệch giữa quỹ đạo thiết lập lý thuyết và chuyển động cơ khớp kẹp thực tế." },
      { heading: "Kiểm thử ứng kích động lực", text: "Thử thách giữ thăng bằng của robot ảo trong các tình huống trơn trượt vật lý hay lực cản gió va đập bất ngờ." }
    ],
    visualDesc: "Bảng hiển thị các cột điểm đánh giá mô hình bao gồm: giữ thăng bằng, linh hoạt kẹp, lực cản và chỉ số tiêu thụ năng lượng."
  },
  "data-marketplace": {
    title: "Chợ Dữ liệu (Data Marketplace)",
    subtitle: "DECENTRALIZED_TRAJECTORY_EXCHANGE",
    category: "Network & Economics",
    overview: "Nơi kết nối các doanh nghiệp AI cần mua dữ liệu huấn luyện chất lượng cao và các đội ngũ có robot thực hiện đo lường xúc giác.",
    mainExplanation: "Chợ dữ liệu PrismaX hoạt động dựa trên hợp đồng thông minh blockchain. Các công ty nghiên cứu AI có thể niêm yết nhu cầu dữ liệu thao túng đồ vật cụ thể (như dữ liệu cắm dây sạc, sắp xếp linh kiện), và các robot trên mạng lưới sẽ nhận việc, quay và xuất dữ liệu để tự động nhận thù lao PIX.",
    keyConcepts: [
      { heading: "Hợp đồng thông minh Trajectory", text: "Tự động khóa quỹ tiền bảo đảm và giải ngân thù lao tài chính khi dữ liệu chuyển động vượt qua kiểm thử chất lượng." },
      { heading: "Giá trị hóa dữ liệu cơ kẹp", text: "Xác lập giá trị kinh tế trực tiếp cho mỗi giây dữ liệu vận động xúc giác chất lượng cao được ghi nhận thành công." }
    ],
    visualDesc: "Sơ đồ kết nối giữa khách hàng tìm kiếm dữ liệu và các nút robot vận động khai thác thông tin trên sàn phi tập trung."
  },
  "quick-return-bonus": {
    title: "Thưởng Phản hồi Nhanh (Quick Return Bonus)",
    subtitle: "LATENCY_REDUCTION_INCENTIVES",
    category: "Network & Economics",
    overview: "Cơ chế khuyến khích tài chính dành cho các máy chủ nút mạng duy trì băng thông rộng và độ trễ cực thấp cho đội ngũ.",
    mainExplanation: "Trong vận hành robot từ xa, mỗi mili-giây độ trễ đều có thể quyết định sự an toàn của thiết bị. PrismaX phát triển cơ chế thưởng PIX tăng cường cho các máy chủ mạng lưới có khả năng duy trì thời gian phản hồi vòng lặp (RTT) dưới 15ms ổn định trong nhiều giờ hoạt động.",
    keyConcepts: [
      { heading: "Tối ưu hóa RTT liên tục", text: "Sử dụng định tuyến nút mạng thông minh để giảm thiểu số bước nhảy trung gian trong đường truyền dữ liệu điều khiển." },
      { heading: "Thưởng PIX theo cấp độ trễ", text: "Gia tăng tỷ lệ nhận phần thưởng kinh tế tỷ lệ thuận với mức độ mượt mà và cực thấp của đáp ứng mạng." }
    ],
    visualDesc: "Đường biểu diễn thể hiện số coin thưởng tăng nhanh tương ứng khi độ trễ trung bình của máy chủ giảm sâu xuống."
  },
  "tokenomics-pix": {
    title: "Hệ Kinh tế Token PIX (Tokenomics PIX)",
    subtitle: "PRISMAX_NATIVE_UTILITY_ASSET",
    category: "Network & Economics",
    overview: "Mô hình thiết kế tạo động lực phát triển đồng coin PIX làm trục trao đổi giá trị giữa GPU, Robot, Con người và Doanh nghiệp AI.",
    mainExplanation: "Đồng PIX là huyết mạch tài chính của PrismaX. Các công ty AI trả PIX để thuê đội ngũ robot thu thập dữ liệu hoặc sử dụng API mô hình; các chủ robot nhận PIX làm thù lao vận hành; và các chuyên gia từ xa nhận PIX khi đồng can thiệp và hỗ trợ xử lý các ca bế tắc phức tạp.",
    keyConcepts: [
      { heading: "Cung cầu kết hợp lành mạnh", text: "Giá trị token liên kết chặt chẽ với nhu cầu dữ liệu huấn luyện robot và số lượng Robot hoạt động thực tế." },
      { heading: "Cơ chế đốt bớt thanh khoản", text: "Một tỷ lệ nhỏ PIX thu phí từ các giao dịch kỹ thuật sẽ được đốt để duy trì cấu trúc tài chính bền vững của nền tảng." }
    ],
    visualDesc: "Vòng luân chuyển giá trị của PIX từ Doanh nghiệp AI, sang Kho lưu trữ, chuyển đến Robot rồi quay về người hỗ trợ kỹ thuật."
  },
  "robots-as-miners": {
    title: "Robot khai thác (Robots as Miners)",
    subtitle: "PHYSICAL_PROOF_OF_WORK",
    category: "Network & Economics",
    overview: "Khái niệm cải biên nơi robot tạo ra giá trị kinh tế trực tiếp thông qua việc khai thác dữ liệu từ các thao tác vật lý thực tế.",
    mainExplanation: "PrismaX biến khái niệm khai thác coin thông thường (đốt điện toán vô ích) thành khai thác động học có giá trị thực tiễn (Physical Proof of Work). Robot khai thác PIX bằng cách hoàn thành các nhiệm vụ thao tác kẹp kẹp được chỉ định, biến lao động cơ học trực tiếp thành tài sản tích lũy.",
    keyConcepts: [
      { heading: "Bằng chứng hoạt động vật lý (PPoW)", text: "Mã hóa hoạt động xoay gập khớp cơ học được ký số làm bằng chứng lao động thực tế từ robot để tránh gian lận." },
      { heading: "Tự chủ kinh tế thiết bị", text: "Cho phép robot tự kiếm tài chính trang trải chi phí sạc điện, bảo trì sửa chữa thông qua làm việc tự động." }
    ],
    visualDesc: "Mô tả dòng xử lý xác thực từ lúc robot hoàn thành kẹp vật dụng cho đến khi khối chuỗi ký số cấp xu thưởng PIX trực tiếp."
  },
  "roadmap-stage-1": {
    title: "Lộ trình: Giai đoạn 1 (Roadmap Stage 1)",
    subtitle: "FOUNDATION_AND_TELEOP_TUNNEL",
    category: "Future & Roadmap",
    overview: "Nền móng thiết lập lớp truyền dữ liệu, kết nối API xúc giác song phương và xây dựng hàng đợi nhà chuyên môn vận hành tiên phong.",
    mainExplanation: "Giai đoạn 1 tập trung toàn lực vào việc xây dựng đường truyền UDP xúc giác độ trễ thấp tối ưu nhất. Chúng tôi hợp tác với các nhà phát triển robot dạng đứng đầu để chuẩn hóa lớp URDF và hình thành tập thể 10,000 người vận hành trực tuyến đầu tiên sẵn sàng hỗ trợ trực tuyến.",
    keyConcepts: [
      { heading: "Đồng bộ hóa giao thức UDP xúc giác", text: "Hoàn thiện khung liên lạc thời gian thực đảm bảo truyền mô-men khớp nối ổn định bất chấp biến động mạng." },
      { heading: "Kiểm thử tích hợp đầu tiên", text: "Vận hành thành công 500 robot thương mại thông qua mạng điều phối từ xa của PrismaX." }
    ],
    visualDesc: "Sơ đồ thể hiện tiến độ giai đoạn 1 tập trung phát triển bộ giải mã xúc giác và xây dựng kho dữ liệu gốc."
  },
  "roadmap-stage-2": {
    title: "Lộ trình: Giai đoạn 2 (Roadmap Stage 2)",
    subtitle: "DATA_MARKETPLACE_AND_LAM_TRAINING",
    category: "Future & Roadmap",
    overview: "Khởi động chợ dữ liệu vận hành tập trung phi tập trung và huấn luyện những phiên bản Mô hình Hành động Lớn (LAM) hoàn chỉnh đầu tiên.",
    mainExplanation: "Trong bước chuyển mình tiếp theo, chúng tôi mở cửa sàn giao dịch dữ liệu, cho phép các đơn vị AI đặt hàng thu thập mẫu chuyển động. Dữ liệu thô từ đây sẽ được cụm GPU siêu tính toán chuyển hóa thành trí tuệ tự trị cho robot thế hệ mới để giảm thiểu can thiệp từ người.",
    keyConcepts: [
      { heading: "Mở sàn giao dịch dữ liệu blockchain", text: "Triển khai hệ thống hợp đồng thông minh xử lý thanh toán mua bán tệp hành vi robot tự động." },
      { heading: "Tích hợp Mô hình Hành động Lớn", text: "Robot bắt đầu có khả năng tự dọn phòng hay xếp đồ lắp ráp với tỷ lệ can thiệp của người giảm trên 80%." }
    ],
    visualDesc: "Đường tăng trưởng dự kiến mô tả bể dữ liệu tích lũy tăng vọt giúp nâng tầm trí tuệ tự lái của thiết bị cơ khí."
  },
  "roadmap-stage-3": {
    title: "Lộ trình: Giai đoạn 3 (Roadmap Stage 3)",
    subtitle: "EMBODIED_GENERAL_INTELLIGENCE",
    category: "Future & Roadmap",
    overview: "Hiện thực hóa Trí tuệ Vật lý Tổng quát (Embodied General Intelligence) nơi robot linh hoạt làm việc tự chủ hoàn toàn.",
    mainExplanation: "Giai đoạn hoàng kim chứng kiến robot hòa nhập sâu vào đời sống xã hội. Nhờ khối lượng dữ liệu khổng lồ và thuật toán mô hình tiệm cận hoàn hảo, robot có thể tự động suy luận, lập kế hoạch và hành động mượt mà trong bất kỳ không gian nhà hay văn phòng nào mà không cần sự trợ giúp từ xa.",
    keyConcepts: [
      { heading: "Trí tuệ nhân robot tổng quát", text: "Robot có thể chuyển từ việc rửa cốc chén sang lau sàn, vặn ốc vít thiết bị một cách tự động khi chỉ cần ra lệnh bằng giọng nói." },
      { heading: "Phổ cập toàn cầu mạng lưới robot", text: "Tạo lập thế giới nơi robot và con người kết hợp ăn ý, giải phóng sức lao động thủ công của con người." }
    ],
    visualDesc: "Sơ đồ đỉnh cao mô tả hệ sinh thái tự trị hoàn chỉnh kết nối hàng triệu thiết bị với Lớp Trí tuệ PrismaX thông thái."
  },
  "motion-field-correction": {
    title: "Hiệu chỉnh Trường Chuyển động (Motion Field Correction)",
    subtitle: "ACTUATOR_KINETIC_CALIBRATOR",
    category: "Evaluations & Analytics",
    overview: "Thuật toán nâng cao tự động tính toán bù trừ sai lệch chuyển động của robot thực tế so với mục tiêu lý thuyết của mô hình AI.",
    mainExplanation: "Do mài mòn cơ học, độ rơ khớp hoặc thay đổi nhiệt độ môi trường, robot thực tế luôn có một khoảng sai lệch cơ khí nhỏ so với lý thuyết. Thuật toán tự động đo đạc sự phản hồi trường lực này để đưa ra các hệ số bù trừ góc quay khớp tức thời, đảm bảo bàn tay sắt luôn gắp trúng mục tiêu với độ chính xác dưới một mili-mét.",
    keyConcepts: [
      { heading: "Động lực học bù trừ rơ khớp", text: "Tính toán bù góc tức thời tại các điểm khớp nối khi phát hiện độ trễ phản hồi xung cơ học." },
      { heading: "Hiệu chính nhiệt độ hành trình", text: "Điều chỉnh dòng điện mô-men xoắn bù lại độ co giãn nhiệt của kim loại tạo nên kết cấu robot." }
    ],
    visualDesc: "So sánh trực quan hai đường khớp hành trình thực tế bị lệch và đường đã được hiệu chỉnh bù góc mượt mà."
  },
  "unsupervised-training": {
    title: "Huấn luyện Không Giám sát (Unsupervised Training)",
    subtitle: "AUTONOMOUS_REPRESENTATION_LEARNING",
    category: "Evaluations & Analytics",
    overview: "Phương pháp cho phép robot tự phân tích, học hỏi các thuộc tính sắp xếp và di chuyển đồ vật từ việc quan sát video thô.",
    mainExplanation: "Thay vì có con người dắt tay chỉ việc, PrismaX tích hợp các mô hình自监督 tự giám sát. Bằng cách quan sát hàng triệu giờ video nấu ăn, dọn dẹp thô trên internet, mạng thần kinh tự động trích xuất các quy tắc tương tác không gian vật lý và tái tạo nó thành các chuyển động thử nghiệm thực tế.",
    keyConcepts: [
      { heading: "Học tương tự từ video internet", text: "Mã hóa hành động của con người trong các video 2D thô thành mô tả chuyển động khớp 3D tương đối." },
      { heading: "Tự tạo kịch bản học tập", text: "Robot tự đặt ra các thử thách gắp xếp nhỏ trong không gian thí nghiệm ảo để kiểm tra học thuyết vận động." }
    ],
    visualDesc: "Luồng phân tích chuyển đổi từ một clip 2D phẳng thành mô hình chuyển động tay 3D của robot dạng người."
  },
  "video-compression-analogy": {
    title: "Sự Biểu diễn Nén Chuyển động",
    subtitle: "SPATIAL_COGNITIVE_COMPRESSION",
    category: "Evaluations & Analytics",
    overview: "Giải thích cách PrismaX nén hàng nghìn tọa độ không gian 3D phức tạp thành dòng mã hóa Token cô đọng giống như nén video MP4.",
    mainExplanation: "Giống như nén video loại bỏ các điểm ảnh giống nhau giữa các khung hình kề cạnh để giảm dung lượng tải, công nghệ PrismaX giữ lại các điểm then chốt cốt lõi (Keyframes) của hành động robot và chỉ truyền các vectơ biến đổi mô-men. Điều này cho phép lưu trữ và truyền tải dữ liệu xúc giác khổng lồ qua mạng internet thông thường mà không cần băng thông lớn.",
    keyConcepts: [
      { heading: "Lọc điểm chuyển động tĩnh", text: "Bỏ qua các khoảng thời gian robot không thay đổi tư thế để giảm thiểu khối lượng dữ liệu đo lường rác." },
      { heading: "Giải mã nén Tokens tại GPU", text: "Tái tạo hoàn hảo chuỗi di chuyển tinh tế từ một đoạn Token cực nhỏ trước khi nạp vào mạng lưới huấn luyện." }
    ],
    visualDesc: "Sơ đồ so sánh khối lượng dữ liệu khổng lồ ban đầu và dải Token siêu nhỏ sau khi đi qua bộ nén PrismaX."
  },
  "codebook-quantization": {
    title: "Lượng tử hóa Sách mã (Codebook Quantization)",
    subtitle: "INFORMATION_BOTTLENECK_SOLVER",
    category: "Evaluations & Analytics",
    overview: "Kỹ thuật toán học ánh xạ hàng triệu quỹ đạo chuyển động vô hạn thành một tập hợp các từ khóa hành động hữu hạn có trong Sách mã chung.",
    mainExplanation: "Các hoạt động cơ học trong thế giới thực là vô hạn và hỗn loạn. Để mạng thần kinh xử lý hiệu quả, PrismaX sử dụng kỹ thuật lượng tử hóa Sách mã (Codebook). Công nghệ này ánh xạ một quỹ đạo gập cánh tay bất kỳ về từ khóa hành động gần nhất và ổn định nhất có trong danh mục định nghĩa, giúp hệ thống hoạt động ổn định bất chấp rung động hay nhiễu cảm biến.",
    keyConcepts: [
      { heading: "Ánh xạ khoảng cách gần nhất", text: "Định vị vectơ chuyển động thực tế về điểm nút chuẩn hóa tương ứng trong không gian tính toán số." },
      { heading: "Trình lượng tử hóa giảm rung động", text: "Triệt tiêu các xung rung lắc tay do nhiễu tín hiệu dòng điện điều khiển khớp nối." }
    ],
    visualDesc: "Cách các vectơ chuyển động rải rác được thu gom và căn chỉnh thẳng hàng vào mạng lưới lưới chuẩn hóa Codebook."
  }
};
