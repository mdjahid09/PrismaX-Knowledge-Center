export interface ChineseArticleTranslation {
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  mainExplanation: string;
  keyConcepts: { heading: string; text: string }[];
  visualDesc: string;
}

export const chineseKnowledgeTranslations: Record<string, ChineseArticleTranslation> = {
  "what-is-prismax": {
    title: "什么是 PrismaX",
    subtitle: "PRISMAX_FOUNDATION_OVERVIEW",
    category: "Introduction & Core",
    overview: "PrismaX 作为一个标准化的去中心化服务层，旨在消除人工智能大模型与现实世界机器运动学之间的抽象鸿沟。通过将物理感官遥测和控制管道合成统一的空间智能流，我们能够实现持续的学习闭环和低于 50毫秒 的双向触觉反馈。",
    mainExplanation: "PrismaX 在一个开放、去中心化的网络中连接了遥操作员、机器人用户、机队所有者和机器人公司。PrismaX 标准化了遥测记录和远程连接，而不是迫使每个机器人公司单独构建专有的培训管道、操作员及数据管道。这将机械硬件的多样性转化为可预测的数字孪生，降低了双足人型机器人和工业机械手臂规模化使用的门槛。",
    keyConcepts: [
      { heading: "统一抽象层", text: "将机器的多样化执行器限制、关节配置和扭矩结构标准化为一个通用框架。" },
      { heading: "开放协调层", text: "连接三个关键支柱：远程人类操作员、本地机队硬件主机和神经网络数据客户。" },
      { heading: "去中心化价值捕获", text: "允许分布式机队所有者安全地将计算服务器和物理机器人连接到全球网络，而无需稀释股权筹集风险资本。" }
    ],
    visualDesc: "PrismaX 通过本地化坐标转换，将目标物理工作空间坐标直接转换为机械电机的运转脉冲。"
  },
  "physical-ai": {
    title: "物理人工智能 (Physical AI)",
    subtitle: "EMBODIED_INTELLIGENCE_MODEL",
    category: "Introduction & Core",
    overview: "与纯软件和数字聊天系统不同，物理人工智能（Physical AI）代表了控制真实物理资产的神经网络模型，这些模型在三维空间中不断学习运动定律。",
    mainExplanation: "物理 AI 直接在物理现实中运行。智能不仅限于文本或像素，它通过空间、时间和接触力的规律来影响物理现实。PrismaX 是物理 AI 的统一开发 system，为机器人训练提供了无限的扩展空间。",
    keyConcepts: [
      { heading: "具身行动 (Embodied Action)", text: "通过与物理环境的移动和触觉互动，使 AI 系统与真实世界主动耦合。" },
      { heading: "实时感官闭环 (Real-Time Loop)", text: "将传感器输入即时转化为运动控制，从而不断获取环境的负 feedback 调节。" },
      { heading: "持续协同训练", text: "每一次人类遥操作演习都会产生轨迹令牌，从而持续优化和增强全局大模型心智。" }
    ],
    visualDesc: "AI 代理通过与物理环境不断反馈和平衡，维持设备稳定的控制系统界面。"
  },
  "teleoperation": {
    title: "遥操作 (Teleoperation)",
    subtitle: "BILATERAL_LATENCY_SCHEDULER :: UDP_TUNNEL",
    category: "Robot Control & Operations",
    overview: "遥操作是指人类操作员通过低延迟的远程双向反馈，对远程物理机器人实施实时在线控制与演练。",
    mainExplanation: "PrismaX 通过超低延迟的 UDP 数据隧道提供触觉力反馈。远程操作员可直接感知到机器人末端执行器感受到的阻力与扭矩。这使人类操作员能够精确掌控工作力度，并将该操作轨迹完整记录为高质量训练数据集。",
    keyConcepts: [
      { heading: "双向触觉力反馈", text: "将机器人的阻力和触觉力即时传回至操作员的远程控制手柄，实现人机协同感知。" },
      { heading: "极低延迟传输", text: "通过安全且深度优化的 UDP 隧道，将单向信号传输耗时管理在 50毫秒 以内。" },
      { heading: "减速阻尼安全防御", text: "当网络通信时延突增并超过 120 毫秒黄金阈值时，自动触发纠偏阻尼缓冲，以全方位维护真机硬件安全。" }
    ],
    visualDesc: "操作员控制台与远端物理机器人之间，进行高频力度与角度同步的双向通信隧道。"
  },
  "data-layer": {
    title: "数据层 (Data Layer)",
    subtitle: "HIGH_FREQUENCY_TELEMETRY_DATAFRAME",
    category: "Robot Control & Operations",
    overview: "机器人运动数据集采集、标准化、压缩及安全存储的高频工业级数据架构模型。",
    mainExplanation: "该系统将机器人的连续动作序列切分为极小的时间步轨迹 Token。它将多路传感器、视觉相机、夹爪扭矩和关节角度在毫秒级尺度上完美同步与对齐。生成的高紧凑型数据帧能极其便利地输入主流黑盒网络或 Transformer 进行具身培训。",
    keyConcepts: [
      { heading: "时间步 Token 解析", text: "将复杂的空间姿态序列转化为适合神经网络读取和处理的小粒度矢量流数据。" },
      { heading: "多路高精准时差校准", text: "将视轨摄像流、执行器压力与底盘差速时差漂移维持在纳秒级，确立数据保真度。" },
      { heading: "高保真无损压缩", text: "深度优化边缘缓存设备存储，全方位确保任何细微力反馈、震动细节及力度特征都被完美保留。" }
    ],
    visualDesc: "多种传感器输入流、惯导和视觉编码统一融合处理并压缩封装为训练文件的逻辑展示。"
  },
  "intelligence-layer": {
    title: "智能层 (Intelligence Layer)",
    subtitle: "LARGE_ACTION_MODEL_LAM_ENGINE",
    category: "Introduction & Core",
    overview: "主导机器人决策、空间推理和复杂场景动作生成的中央具身大模型决策心智引擎。",
    mainExplanation: "智能层是 PrismaX 的核心算法大脑。它不满足于被动响应，而是能根据当前的感官输入对未来的三维运动轨迹进行精确预测。搭载专用大动作模型（LAM），使其能够在从未接触过的非结构化环境中自行做出安全合理的动作规划。",
    keyConcepts: [
      { heading: "大动作模型 (LAM)", text: "融合历史轨迹自监督特征，直接针对下一个物理时间步输出高精度的关节角控制向量。" },
      { heading: "自适应修正机制", text: "当动作遭遇不可抗物理偏差或卡阻时，立刻在线修正输出以避免关节损坏并完成目标。" },
      { heading: "触觉闭环推理", text: "完全依据机械关节感受到的物体阻力、摩擦力以及动态重力特征，毫秒级自调节和匹配转速与夹爪握力矩。" }
    ],
    visualDesc: "多模态神经网络分析实时视觉镜头和接触力矢量，自主生成最平滑执行轨迹的神经网络渲染。"
  },
  "system-architecture": {
    title: "系统架构 (System Architecture)",
    subtitle: "PRISMAX_CIRCULAR_FEEDBACK_ECOSYSTEM",
    category: "Introduction & Core",
    overview: "由实体机器人、在线人类专家、数据存储池和云端分布式智能心智整合构成的螺旋演进生态体系。",
    mainExplanation: "此架构代表了 PrismaX 闭环反馈生态 of 精髓。遥操作员操控机器人避障，数据层高精准捕捉操作数据，云端算力节点基于新轨迹训练模型更新脑区，新版本模型通过 OTA 升级再次赋能硬件。从而构建出完全自主闭环的具身进化循环。",
    keyConcepts: [
      { heading: "闭环反馈演进", text: "将物理机械输出与训练参数调整无缝挂钩，以形成能够快速收敛和自我优化的长效机制。" },
      { heading: "去中心化多活发布", text: "在不受制于任何中央单点服务器的前提下，实现全球海量节点数据的分布式多点存储和共识分发。" },
      { heading: "跨设备通用动力学求解", text: "将高度统一的空间三维动力学规范（如 URDF 坐标）毫秒级编译转化成任意人形双足或四足设备的关节指令。" }
    ],
    visualDesc: "操作员、云端 AI 算力中心、高速冷存储池与物理机械手关节之间不断流转的闭环总线。"
  },
  "robot-learning": {
    title: "机器人学习 (Robot Learning)",
    subtitle: "REINFORCEMENT_TRAINING_CYCLE",
    category: "Future & Roadmap",
    overview: "融合在线模拟强化学习与真机遥操作样本，推动实体机械持续演化和自愈的高效率学习网络。",
    mainExplanation: "通过真机数据引导加上仿真模拟中的高频强化学习，机器人能够以极低的安全成本和极快的速度纠正错误动作。PrismaX 的技术彻底消除了虚拟现实之间的“鸿沟”，使数百小时仿真生成的网络在真机落地时无需进行繁琐细调。",
    keyConcepts: [
      { heading: "强化学习自我博弈", text: "在多核虚拟空间中让机械代理通过反复自博弈探索极致避障，产出完美收敛策略。" },
      { heading: "Sim-to-Real 精准校正", text: "利用独创动力学拟合算法，校平虚拟物理仿真系统与真机微小重力和摩擦阻力的误差。" }
    ],
    visualDesc: "虚拟仿真系统中生成的平滑末端运动学切线与真实设备粗糙运行切线的自愈重叠分析。"
  },
  "digital-twins": {
    title: "数字孪生 (Digital Twins)",
    subtitle: "REAL_TIME_URDF_SYNCHRONIZER",
    category: "Future & Roadmap",
    overview: "现实世界中执行器的三维位姿姿态和力学应力在主屏虚拟空间中 1:1 毫秒级极高精度的实时复现图像。",
    mainExplanation: "本技术保持数据高保真度的绝对同步。当真实环境下的机械手臂发生一毫米的位移或一牛顿的受力变化时，操作仪显控面板上的虚拟模型也会同步做出微观反应。此项技术为远端故障隔离、故障重温提供了革命性的验证路径。",
    keyConcepts: [
      { heading: "统一机器人描述协议 (URDF)", text: "使用行业领先的代码统一封装标准，规范定义三维机器人的关节质量、阻尼与外观渲染模型。" },
      { heading: "全息应力流映射", text: "不仅可以实现姿态同步，更把硬件受到的扭矩、温度以彩色热力学数字图谱形式实时复现在主显屏幕上。" }
    ],
    visualDesc: "机械关节力学应力与三维显卡渲染视口虚拟图元在网络两端进行极致低时延同步的多线程拓扑。"
  },
  "human-in-the-loop": {
    title: "人机协同 (Human-in-the-Loop)",
    subtitle: "MITIGATION_OF_FOUNDATION_FAILURES",
    category: "Robot Control & Operations",
    overview: "当具身智能在复杂未知的混沌长尾场景中产生不确定性判断时，人类接管与行为修正的最优兜底协议。",
    mainExplanation: "完全自主的机器人无法完美处理复杂长尾任务（如突发的液体泼溅、缠绕电线）。一旦发生判定度过低，PrismaX 安全中继会立即向多活专家网络发送求助。人类远程专家能在亚微秒级切换到中枢控制，解决突发困难，同时接管过程产生的优秀规避轨迹会实时写入网络知识图谱。",
    keyConcepts: [
      { heading: "静默低感热备切换", text: "一键无缝完成从自主感知大动作模型的计算序列切换到远程操作者的触角控制序列，提供软缓冲。" },
      { heading: "自监督示范捕获", text: "自动将人类介入的所有修复动作序列标注并转换为具身大模型最急需的高权重泛化样本。" }
    ],
    visualDesc: "不规则作业现场机械卡死后，一键接入人工虚拟现实显控系统完成应急复位的全过程示流图。"
  },
  "fleet-operations": {
    title: "机队管理 (Fleet Operations)",
    subtitle: "DECENTRALIZED_FLEET_MANAGEMENT",
    category: "Network & Economics",
    overview: "利用轻量化网关和分布式容器框架，对全球多型号多厂商的机器人资产进行全局调度、安全审核与配置维护。",
    mainExplanation: "PrismaX 允许对异构机队（甚至包括不同轮腿底盘、不同自由度关节的机械）在同一个大屏管理底座内进行无感升级和批量作业下发。它还能对诸如电机线圈发热、传动比疲劳、网络抓包延迟、硬件死机等进行动态预测性维护监控。",
    keyConcepts: [
      { heading: "异构机队任务无感广播", text: "通过转换层将通用拣货或巡检作业一键重构并分发给不同底层硬件架构的机器人去执行。" },
      { heading: "电机级全生命周期预测", text: "收集高频电流、电压变化图谱，提前数周对可能烧坏的执行器伺服部件发出更换警报。" }
    ],
    visualDesc: "全景数字化控制面板，同时追踪管理分布在不同物理空间、处于不同电量和维护等级的十几套机器人工作状态。"
  },
  "training-infrastructure": {
    title: "训练基础设施 (Training Infrastructure)",
    subtitle: "CONTINUOUS_TRANSFORMER_TRAINING_CLOUD",
    category: "Future & Roadmap",
    overview: "云端可弹性编排的超大规模算力集群，专门用于对海量、高频的机器人空间时序遥测进行降噪和模型回训。",
    mainExplanation: "来自实体机队的数据高度零碎且含有传感器噪声（如镜头灰尘、轮子打滑引起的抖动）。PrismaX 大规模训练集群能够即时实施几何降噪与时间步重对齐。其自研的大序列并行混合架构能够不间断对几十亿参数的动作生成模型实施高吞吐量的高速训练。",
    keyConcepts: [
      { heading: "空间时序并行对齐", text: "极速清除由于网络丢包、延迟造成的时序抖动，并在空间几何维度层进行零误差拟合。" },
      { heading: "OTA 级无感技能烧录", text: "当新技能在新模型中被精炼生成后，立刻通过超静默通道安全推送更新到实体机器人的本地闪存。" }
    ],
    visualDesc: "从各地分布式节点汇拢的生数据进入智能脱敏降噪通道，随后在大型超算中心编译成轻量神经网络流的循环过程。"
  },
  "action-models": {
    title: "大动作模型 (Action Models)",
    subtitle: "LARGE_ACTION_MODEL_LAM_FOUNDATION",
    category: "Introduction & Core",
    overview: "一种专门的、可以直接将三维视觉空间输入和接触负反馈矢量一阶转化为毫秒级机械末端力和位置偏差的逻辑基盘模型。",
    mainExplanation: "传统的 AI 大语音模型仅仅明白文字概念，完全不知道手掌抓握一个番茄和一杯咖啡由于重力及刚度不同需要截然相反的闭环力控。PrismaX 的大动作模型（LAM）直接将三维位置相机像素和关节压力传感器打包，输出最符合经典控制物理定律的手臂运动轨迹点。",
    keyConcepts: [
      { heading: "高阶视触觉深度统合", text: "将相机的三维景深与夹爪的微差压力输入在同一个 Transformer 的上下文窗口进行多维特征混合。" },
      { heading: "关节级动态流规划", text: "跳过普通复杂的逆运动学方程耗时，直接从像素一步转化成所有关节所需的微小扭矩变化。" }
    ],
    visualDesc: "对非规整、滑腻的目标物体实施平滑自适应抓握时，指尖传感器的受力图元在神经网络内部的实时高频测绘图。"
  },
  "machine-perception": {
    title: "机器感知 (Machine Perception)",
    subtitle: "DINOV2_CLIP_SPATIAL_SENSORY",
    category: "Introduction & Core",
    overview: "机器人的高保真数字五官，可以瞬间从杂乱模糊的非结构化环境光波、红外、超声以及惯导中精炼出高密度的位置拓扑信息。",
    mainExplanation: "PrismaX 架构深度结合了基于视觉的无监督语义解析（DINOv2）以及图文空间关联提取（CLIP）。这赋予了机器人即时判断场景中各个障碍物的物理类别（如区分固体墙和软塑料帘，以及判断水面上反光是一水洼还是金属片）的强大三维空间推理心智。",
    keyConcepts: [
      { heading: "语义级三维物理拓扑", text: "不仅输出物体的三维点云框架，更能直接感知周围环境物体的各种力学弹性、质量分布语义。" },
      { heading: "跨光波感官无差同步", text: "在突发强光闪烁、沙尘或几乎纯黑的恶劣工作区域内依然可以通过红外及双目景深镜头安全导航。" }
    ],
    visualDesc: "杂乱仓储区域内各种乱放的货物、液滴和极窄通道，被机器传感器网络处理成带语义的高精度彩色网格边界图。"
  },
  "simulation-systems": {
    title: "高拟真仿真系统 (Simulation Systems)",
    subtitle: "SIM2REAL_GAP_BRIDGING_PROTOCOL",
    category: "Robot Control & Operations",
    overview: "用于进行高密度测试和算法预训练的大规模、超实时的动力学及电刚性虚拟沙盒，旨在消除 Sim2Real 的拟合误差。",
    mainExplanation: "在纯仿真器中，机械运动轨迹往往过分完美。而在现实世界中，机械传动的咬合误差、轻微的轴承磨损以及空气阻力都会使模型瞬间失校。PrismaX 仿真协议在渲染层和物理引擎中主动注入这些细微不确定噪声，使仿真器里百小时培养出来的网络，在物理设备上也能开箱即用。",
    keyConcepts: [
      { heading: "电磁力学刚度阻尼拟合", text: "把实体关节中电机的热衰减、传动钢丝绳阻尼在仿真模型代码中实现最高保真度的还原。" },
      { heading: "分布式大规模场景生成", text: "一键并发生成数万个包含完全不同的重力、天气和地面摩擦力指数的环境沙盒进行自我迭代训练。" }
    ],
    visualDesc: "理想几何学平顺轨迹与混杂动力学真机噪声在轨迹对齐计算模块中进行阻尼修补、无损转换的科学图示。"
  },
  "deployment-pipelines": {
    title: "极速部署管道 (Deployment Pipelines)",
    subtitle: "FLEET_DEPLOYMENT_CHANNEL_INFRA",
    category: "Network & Economics",
    overview: "一套高频、防病毒篡改且完全透明的企业级边缘设备交付体系，保证新生成的模型被最平顺地烧录进边缘机器人主板。",
    mainExplanation: "将几吉字节大小的大神经模型频繁热更新给分散在全球的企业机器人，其网络稳定性及验证签名要求极其苛刻。PrismaX 自研的设备发布管道不仅保证了极高的断点续传和并发下发率，更能确保烧录时如果检测到任何关节异常，可以在几个毫秒内实施彻底无感的回滚保护。",
    keyConcepts: [
      { heading: "原子化双区热升级机制", text: "闪存主板设立双镜像区。在不打断现行巡检的前提下悄然烧录新版本，一旦通过检验，重启瞬间即可无缝切换。" },
      { heading: "边缘端网络硬件数字验签", text: "使用完全防伪的去中心化证书签名算法校验升级包，防止机器人在工业现场遭受任何外来黑客的网络攻击。" }
    ],
    visualDesc: "从技能训练云端算力群、高防护安全验证节点一直分发至不同硬件厂家多形态设备微控制器的热烧录分层架构。"
  },
  "physical-intelligence": {
    title: "具身物理智能 (Physical Intelligence)",
    subtitle: "ACTUATOR_KINEMATIC_STANDARDIZATION",
    category: "Introduction & Core",
    overview: "将关节的物理限制、刚度控制、接触保护和自平衡协调作为机器人本能反射去执行的高级仿生动力学定理。",
    mainExplanation: "物理智能绝不仅指脑部的语义计算，它是肢体关节自身的无条件本能。当机器人手臂受到突如其来的强烈撞击或脚部在砂石路打滑，底层的物理智能不经过漫长的中央大脑规划，而是立刻通过各关节伺服的阻力自适应调整，使机器保持直立姿态不倾倒。",
    keyConcepts: [
      { heading: "执行器亚毫秒自平衡反射", text: "通过高敏感度的伺服硬件，无时延感知外部载荷或晃动，直接就地输出相反扭矩以保持机身挺拔稳定。" },
      { heading: "本能阻抗安全避碰", text: "当肢体不小心刮擦到人类或其他障碍物时，无条件触发柔性让步，从而将碰撞损伤降为零。" }
    ],
    visualDesc: "机械大臂遭受意外的大锤侧面击打后，全身二十几个执行器瞬间波浪式分散多余动能完成自愈站立的动能图元解析。"
  },
  "robotics-data-collection": {
    title: "机器人数据采集 (Robotics Data Collection)",
    subtitle: "MULTIMODAL_TRAJECTORY_ACCUMULATION",
    category: "Robot Control & Operations",
    overview: "一种将远程人类的遥操作操作切片、环境实时相机的视觉变化流以及关节伺服电流高精同步并打标签的高质量采集规程。",
    mainExplanation: "在具身智能领域，一万小时由人类专家实地示范的、带有触觉和拉力标签的数据，其价值是普通视频数据的千万倍以上。PrismaX 协调机制提供针对人类穿戴传感器（例如数据手套、VR 动捕）与机器人机械手臂的高频同步记录，确保每一滴汗水和力度，都在微秒级上和画面同步对齐。",
    keyConcepts: [
      { heading: "空间多模态同步录入", text: "将人类手柄操作的细微力道和机器人的视觉画面时帧完整锁定整合在同一个多维度数据矩阵中。" },
      { heading: "行为决策时序标注", text: "通过数据捕获系统自动提炼出行为成功的决策节点关键路径，大幅降低无意义空闲操作帧的存储损耗。" }
    ],
    visualDesc: "人类操作员穿戴数据背心演示开门动作，多路数据流、惯导与末端碰撞反馈被严格打上了高保真时间码以作回放学习。"
  },
  "future-of-physical-ai": {
    title: "物理人工智能的未来",
    subtitle: "THE_SOVEREIGN_ROBOTICS_ECOSYSTEM",
    category: "Future & Roadmap",
    overview: "全面迈入超大规模 humanoid 新工业革命，物理 AI 像电力一样无处不在并具有完全自主通用和自主演化生态的技术画卷。",
    mainExplanation: "物理 AI 的最终形态不只是局限在工业厂房内装货。在 PrismaX 的勾勒之中，未来的任何机器人硬件，只要一旦接上全球去中心化 PrismaX 协议，立刻可以从主脑池按需同步和借用千百种成熟的空间运动技能，并可以通过自主人机协同在非结构化场景中完全释放无忧工作力。",
    keyConcepts: [
      { heading: "通用运动模型 (GMM) 统一", text: "彻底消除了硬件底座与机械关节数量的拘束，让几百种型号、不同结构尺寸的机器人机身能够共享同一个技能池。" },
      { heading: "自组装分布式服务总线", text: "机器人、传感器以及在线接管人类能够像局域网打印机一样在需要时最快速自由拼装、接单和进行算力结算。" }
    ],
    visualDesc: "成千上万来自世界各地的不同异构机器体在 PrismaX 元协议连接下，整齐划一地共享新发行的空间操作算力网络。"
  },
  "eval-engine": {
    title: "评估心智引擎 (Eval Engine)",
    subtitle: "SIMULATION_BENCHMARKING_MATRIX",
    category: "Robot Control & Operations",
    overview: "机器人动作安全与技能熟练度的科学评估与纠偏中继分析平台。",
    mainExplanation: "在这个高度自动化的评测系统内，由于任何技能更新（比如抓持水杯防滑升级）都关系到昂贵硬件在物理现场的绝对安全。因此，任何新参数都必须先进入评测心智矩阵中，接受数万次各种极具挑战性环境、撞击与传感器死机模拟大考，直到其零偏失概率低于千万分之一时，才能被核可执行更新。",
    keyConcepts: [
      { heading: "安全临界压力测试", text: "仿真器在抓取物或搬运中随机施加外部侧向风、表面涂油打滑等恶劣条件，以严苛测定运动参数的抗挫折边界。" },
      { heading: "多维精确度量化矩阵", text: "不仅依靠成功或失败作为定性，而是对整体执行的角加速度、轴承损耗以及电源效率等进行精密评分。" }
    ],
    visualDesc: "待评价动作参数装载在模拟平台上，多维评分表上的各轴抗冲击能力、平滑指数、能效指标实时呈列和对比曲线。"
  },
  "data-marketplace": {
    title: "去中心化数据市场 (Data Marketplace)",
    subtitle: "SECURE_TRAJECTORY_EXCHANGE_LEDGER",
    category: "Network & Economics",
    overview: "全球第一个去中心化机器具身运动数据集与物理技能轨迹买卖的大型加密存储与发布总线。",
    mainExplanation: "传统上，极低频发生的优秀运动数据（例如成功排除极难的电缆打结）都被单一硬件厂家锁在自家私有数据库中。PrismaX 利用完全平等的、无许可的零知识轨迹证明。让拥有特种机器人、实地辛勤采集到极高纯度轨迹数据的小微运营所，可以非常高价地将数据销售给急需空间技能的 AI 云厂商，以此将空间汗水立即兑现为经济利益。",
    keyConcepts: [
      { heading: "零知识轨迹证明", text: "使数据卖家在无需泄漏详细地理坐标和机密设备序列号等敏感隐私的前提下，严密证实数据集的极高纯度和独特性。" },
      { heading: "智能结算防复制锁", text: "数据 buyer 和 seller 经由公开分布式网络直接交易。技能数据集被包裹在加密容器中，仅供买家在隔离沙盒算力中安全回训。" }
    ],
    visualDesc: "通透清晰的去中心化区块链上，数据买方与多路独立真机运营组正在通过共识协议安全互换算力凭证与轨迹哈希条面。"
  },
  "quick-return-bonus": {
    title: "快速响应奖励 (Quick Return Bonus)",
    subtitle: "OPERATOR_PRODUCTIVITY_MULTIPLIER",
    category: "Network & Economics",
    overview: "PrismaX 网络为表彰极其优异的操作响应速度、关节零非安全震颤轨迹而推行的特殊追加奖励政策。",
    mainExplanation: "高保真机械操作需要最优秀的精力。PrismaX 网络设立智能自动审计，任何实远程操作员，只要展现出响应低延时、极低不合理抖动和零关节失控等教科书级完美作业路径，都会被智能调度算法自动标记为“专家星级”，并随轨迹被选为回训样本而自动增获代币和优先特权。",
    keyConcepts: [
      { heading: "星级专家轨迹审计", text: "自监督分析算法自动测算操作过程中的刚性抖动和手眼协调延迟。轨迹越完美，获得奖励越多。" },
      { heading: "最高优先级节点接单权", text: "凡星级极高的操作人可在系统中优先匹配高价值、大颗粒度的工业核心关节作业请求，提高营收。" }
    ],
    visualDesc: "优秀的远程人工示范，操作动作曲线柔和均匀、毫无毛糙感，其下立即提示代币快速进账的数字光柱变化。"
  },
  "tokenomics-pix": {
    title: "代币经济学与 $PIX",
    subtitle: "UTILITY_RESERVATIONS_UTILITY",
    category: "Network & Economics",
    overview: "$PIX 是 PrismaX 具身智能协作总线中用于空间动作流结算、机体自组装以及遥操作佣金发放的唯一核心代币。",
    mainExplanation: "PrismaX 并不是一个纯概念系统，它需要通过一套精妙平衡、不可随性篡改的去中心化代币经济体。硬件所有者通过共享设备获得 $PIX 代币；操作人参与纠偏工作提现 $PIX 佣金；AI 云巨头使用 $PIX 大量回购高质量空间动作集；如此三向循环，使网络整体价值伴随着实体动作累积而发生稳固的飞跃。",
    keyConcepts: [
      { heading: "智能轨迹回购销毁机制", text: "交易轨迹数据产生的部分代币会被划入燃烧池或锁在智能锁里，使网络流动性持续保持稳定健康。" },
      { heading: "空间权益抵押共识", text: "欲加入系统接单的设备也需抵押一部分 $PIX 代币，一旦故意恶意作恶或损坏任务，质押将被罚没扣除以保底安全。" }
    ],
    visualDesc: "闭环的经济流程图谱，展现了代币如何在 AI 训练主脑、实地真机机队、在线接电工和质押安全库之间进行结算流转。"
  },
  "robots-as-miners": {
    title: "机器人即矿工 (Robots as Miners)",
    subtitle: "PHYSICAL_WORK_PROOF_MINING",
    category: "Network & Economics",
    overview: "机器人每一次通过清扫、装配、抓取等实打实物理劳动，都在为大模型提供紧缺的空间动作样本，这被称为“物理劳动即挖矿”。",
    mainExplanation: "传统的互联网信息世界早已数据冗余，但高保真的真实生活、工业现场对拼装和除障的实体轨迹极其匮乏。在 PrismaX 框架中，“物理劳动”替代了无意义的纯电磁算哈希碰撞。您的设备每一次真实成功开锁、分拣纸箱，都被高频对齐记录并核算为一份物理劳动量证明，从而为您自动获得 $PIX 网络奖励。",
    keyConcepts: [
      { heading: "物理劳动量证明 (PoPW)", text: "使用关节负载传感器、眼摄像头以及环境红外校验确认机械真的辛勤完成了有效空间位移与生产行动。" },
      { heading: "多形态设备一视同仁", text: "不论是庞大的双臂工业重型设备，还是在地面上的小巧清扫车，只要成功生产和贡献了数据，都在按精度获得收入。" }
    ],
    visualDesc: "真实的机器人正在工厂流水的拾捡传送盘上忙碌，随着一次次装箱完成，屏幕浮现其代表的 $PIX 代币正高保真挖取进账。"
  },
  "roadmap-stage-1": {
    title: "路标第一阶段：具身数据网络奠基",
    subtitle: "MILESTONE_01 :: INFRA_BOOTSTRAP",
    category: "Future & Roadmap",
    overview: "PrismaX 首战告捷，完成超轻量化边缘通讯 SDK 研发以及极低时延视频网络通信隧道的奠基。",
    mainExplanation: "奠基阶段的核心在于打造绝不动摇的“超级高速公路”。通过在全球核心云区边缘建立超轻量中继代理，我们打通了首批涵盖不同自由度关节和传感器协议的数百台物理机器人实验，保证在典型宽带环境下能让遥操作双向延迟轻松压低在 30 毫秒黄金生命线以内。",
    keyConcepts: [
      { heading: "极小化多系统边缘 SDK 奠基", text: "在极简架构中实现极高效率和多平台（ROS 2、RT-Thread 等）开箱即用的设备端极简适配器编译。" },
      { heading: "智能冗余视频中继部署", text: "结合智能插帧和高质 H.265/AV1 编解码，在微弱移动信号中依旧能为操作者输出不晕眩的极高帧率。" }
    ],
    visualDesc: "一条平整明亮的数字高架公路，连接着不同国度、不同品牌的机械终端，大量的视频与电流时序包正极其温顺地在管道中行驶。"
  },
  "roadmap-stage-2": {
    title: "路标第二阶段：百万真机具身动作网络",
    subtitle: "MILESTONE_02 :: AGGREGATION_SCALE",
    category: "Future & Roadmap",
    overview: "跨越规模爆发奇点，构建全球包含几十万至百万台真机在统一总线并网协同工作的巨型物理动作捕获与服务集群。",
    mainExplanation: "在第二阶段，我们将与海量第三方主流机器人整机厂商及重工业制造巨头达成无损插拔并网战略同盟。系统将引入高度精炼的 GMM 泛化中间件，让那些完全不具备自家云控制台的中小品牌设备也能即刻获取来自大动作网络的云端高级操作指令，并产出高保真数据集形成良性自发大增长循环。",
    keyConcepts: [
      { heading: "百万级硬件并网中间件", text: "利用独特的抽象引擎，让不同关节长度、自由度组合的异构设备在主线总线中无阻并网，自动映射对齐。" },
      { heading: "千赫兹级数据池大聚合", text: "构建大规模、零丢包的冷热全息轨迹流动湖，单日新增高高纯度具身动作字节级和频次突破数千万小时。" }
    ],
    visualDesc: "由单条高速延伸成为一片纵横交错的多维技能蛛网，数百万各式各样的移动、爬行、抓握硬件在网络上并立起舞。"
  },
  "roadmap-stage-3": {
    title: "路标第三阶段：完全自进化通用空间心智",
    subtitle: "MILESTONE_03 :: AUTONOMOUS_SINGULARITY",
    category: "Future & Roadmap",
    overview: "终极阶段。实体物理 AI 完全摆脱预训练硬编码的限制，展现出在任何崭新非规整场景中自组装、自演进的通用空间具身宏伟画卷。",
    mainExplanation: "这是我们的终极梦想。在此阶段，PrismaX 高度智能化的 GMM 脑部和边缘反向强化学习完全接轨。实体机器人彻底像科幻小说所描述，不仅可以灵活感知现实中从未见过的柔软不规则物料并加以修剪，其关节更能利用本地发生的力反馈、自主和周遭同类设备沟通如何更安全科学地抬起沉重柜子，迈向完全的人类无感协助新文明时代。",
    keyConcepts: [
      { heading: "无监督自主空间意识融通", text: "不需要任何人事前费心标注，新装载的设备利用微型惯导、雷达和主脑池信息，自行参透新场景的阻尼刚度。" },
      { heading: "去中心化自主作业博弈决策", text: "多台异构设备可像蜂巢一样在灾区自发进行责任割裂，自行共识出最不易受损、省电的联合姿势作业决策。" }
    ],
    visualDesc: "一位人型机器侍立在阳光柔和洒落的起居室内，神色自若、极其温顺地避开凌乱玩具，自主伸手扶稳一盆颤巍巍的绿植。"
  },
  "motion-field-correction": {
    title: "动态运动场矫正 (Motion Field Correction)",
    subtitle: "COMPENSATOR_ALGEBRA_ENGINE",
    category: "Robot Control & Operations",
    overview: "针对真机由于关节磨损、惯性突变以及齿轮空回在动态运行中产生的偏移建立的高阶在线微分补偿数学分析引擎。",
    mainExplanation: "真实的减速机和丝杠无论工艺多么严丝合缝，在运行百万次后难免会生产几十微米的空回，由于动作被拉长，到指尖上可能会放大到几厘米的重大误差。PrismaX 动态运动场基于高频力反馈测算动态刚度阻尼系数，能在几微秒时间步中对下一组关节角度指令进行高阶微积分平滑微调补偿，保证精度如新。",
    keyConcepts: [
      { heading: "传动齿轮空回在线辨识", text: "依靠反向电流波动和高频景深镜头边缘扫描，自动测算出当前关节传动副的精确隙宽并输出微波纠偏。" },
      { heading: "惯性载荷微秒级微积分运算", text: "当夹爪里拿捏着重型物块快速摆动时，算法自动测出由此而增加的额外加速度惯性拖滞，并对制动给予反向扭矩抵消。" }
    ],
    visualDesc: "因由于重载摇晃产生位移偏摆的实际运动学轨迹弧线，在线被一层精密绿色动态校准线进行对冲，并瞬间拉回至中心轨线。"
  },
  "unsupervised-training": {
    title: "无监督自特征训练 (Unsupervised Training)",
    subtitle: "AUTO_ENCODING_SPATIAL_TRAJECTORIES",
    category: "Future & Roadmap",
    overview: "机器人动作大模型自发从海量且不带任何人工标注的原始运动视频和遥测电流拼合数据中，自动提炼并参透出普遍经典物理学重力和刚度规律的无温热基础回训技术。",
    mainExplanation: "给海量的真机动作数据做大量人工标注在经济上是不可承受的。PrismaX 的自特征训练算法将无标注轨迹看成一种“空间文字”，像大语言模型通过完形填空掌握语法一样，大动作模型通过遮蔽部分关节时序、让网络拼命预测被突发遮蔽处的正确动作，来自主参透、无师自通地学会了万物运行的动力学刚度和重力平衡法则。",
    keyConcepts: [
      { heading: "关节动作遮蔽时间步预测", text: "故意剔除动作轨迹中中间两秒的电位和编码器角度，强迫模型根据前后姿态自推算出这期间最不突兀的合力姿态路径。" },
      { heading: "视触跨媒体空间共轭学习", text: "通过让机器人自己看大量物体坠落、液体飞溅录像，并在没有人的前提下建立起眼睛看得到的画面抖动与电机拉力变化的空间本能映射网络。" }
    ],
    visualDesc: "一段连续的倒茶高保真轨迹，中央部分被标上了虚线网格，大动作为了还原出完美的倒茶手势，正在极高帧率自我修补插帧计算。"
  },
  "video-compression-analogy": {
    title: "视频压缩隐喻：动作流极致压缩",
    subtitle: "COMPRESSION_METAPHOR_FOR_ACTION",
    category: "Robot Control & Operations",
    overview: "一种将几十个高频关节的高密集、极冗余的空间连续动作坐标，通过类似 H.265/AV1 视频运动估计的巧妙映射，极致压缩为极轻量信息流的类比算法解析。",
    mainExplanation: "在普通的网络传输中，如果把上百个关节、压力触感传感器所有的三维浮点坐标直接高频网络群发，会让任何工业路由器和移动 5G 网关承压巨大。正如同现代视频并不是把每一帧的所有像素发出去、而是仅发送当前图像和上一图像的差值偏移（P/B 帧）一样，PrismaX 动作压缩算法仅解算并发送当前各关节较之前时帧产出的“微细偏差向量”，这大幅把遥测所需带宽缩减掉了 94% 以上。",
    keyConcepts: [
      { heading: "关节状态动态关键时帧生成", text: "类似于视频压缩中的 I 帧。在动作处于爆发点或静止变动转向瞬间，对整机姿态进行完整高准度快照包发射。" },
      { heading: "偏差自适应运动向量内插", text: "对连续均匀动作执行纯粹的微小差分增量传输，由接收端边缘微控制器依照内置弹性模型实施瞬时平滑内插重构姿态。" }
    ],
    visualDesc: "彩色的关节多路矢量信号先被高密度堆栈成粗大长条；在进入压缩通道后，变成了一根根极细若隐若现的时区轻量化信号线。"
  },
  "codebook-quantization": {
    title: "码本量化算法 (Codebook Quantization)",
    subtitle: "VECTOR_QUANTIZED_ACTION_SPACES",
    category: "Robot Control & Operations",
    overview: "把无限维度各异、连续混乱的电机细微扭矩和关节角度数据，精准规整并翻译为数字量化码本（Codebook）中极具普适性的、离散标准动作词汇的过程。",
    mainExplanation: "人类的文字是由有限的字词组成的，而大语言模型也由此才能在大词表中预测下一个离散单词。要想让机器人动作也能和 LLM 通畅对话和联合理解，就得把无限光滑且各不相同的电机动作进行离散数字化转码。码本量化（Codebook Quantization）设计了数万种最核心和最常见的基本动作微调元（如“向上微提一角”、“顺时针回拨三度”等），使任意关节变化都能像选汉字一样转换为词表 Token，大模型由此便可瞬间理解动作并参与合理解析。",
    keyConcepts: [
      { heading: "向量量化具身生成器 (VQ-Action)", text: "将原本拥有无限种可能性的、凌乱粗糙的物理关节原始电位曲线离散成极其洁净的、在全局码本中索引可见的数字 Token 序列。" },
      { heading: "动作语义码本对齐精度", text: "在极大幅度降低网络计算负载、实现文字代码一键生动具身操纵的同时，通过精心对齐算法防范由于离散导致的动作粗糙和失准。" }
    ],
    visualDesc: "一条如同起伏山峦般无限光滑和杂乱多姿的关节电流物理曲线，精细地被一层层红色的规则网格方块切割并转换为一个个代表固定含义的十六进制编码。"
  }
};
