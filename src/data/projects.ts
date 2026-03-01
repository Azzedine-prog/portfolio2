export interface Project {
    slug: string;
    title: string;
    category: string;
    date: string;
    description: string;
    objectives: string[];
    hardware: { name: string; icon: string }[];
    codeLink?: string;
    image: string;
    tags: string[];
}

export const projectsData: Project[] = [
    {
        slug: "smart-parking",
        title: "Smart Parking Platform",
        category: "IoT & Control",
        date: "September 13, 2020",
        description: "An automated parking access system designed for club members. The system uses RFID technology to verify member identity and balance before granting access via a motorized barrier.",
        objectives: [
            "Automate parking entry/exit for authorized personnel only.",
            "Implement real-time balance tracking on member RFID cards.",
            "Visual status indication using RGB telemetry (Red/Blue/Green status).",
            "Distance-based vehicle detection at entry points."
        ],
        hardware: [
            { name: "Arduino Uno R3", icon: "Cpu" },
            { name: "RFID RC522", icon: "Layers" },
            { name: "Ultrasonic Sensor", icon: "Terminal" },
            { name: "Servo SG90", icon: "Wrench" },
            { name: "LCD 16x2 I2C", icon: "Layers" }
        ],
        codeLink: "https://create.arduino.cc/editor/lakhdarazzedine/e6d3c9e9-de2e-4d0a-8546-dead10eb5236/preview?embed",
        image: "/images/parking.png",
        tags: ["Arduino", "RFID", "Automation"]
    },
    {
        slug: "smart-home",
        title: "Full Home Control",
        category: "Automation",
        date: "September 21, 2021",
        description: "A hybrid Raspberry Pi and Arduino home automation ecosystem providing remote telemetry and control via a Flask-based web interface.",
        objectives: [
            "Optimized energy consumption through automatic lighting.",
            "Remote monitoring of climate metrics (Temp/Humidity) via dashboard.",
            "Multi-threaded backend for simultaneous sensor polling and web serving.",
            "Secure garage access with distance-monitored safety protocols."
        ],
        hardware: [
            { name: "Raspberry Pi 3B+", icon: "Cpu" },
            { name: "Arduino Uno", icon: "Cpu" },
            { name: "DHT11 Sensor", icon: "Layers" },
            { name: "Flask (Python)", icon: "Terminal" }
        ],
        codeLink: "https://github.com/Azzedine-prog/RaspberryPI-FLASK-Full-WEB-Server-HOME-CONTROLLER",
        image: "/images/cese.jpg",
        tags: ["Python", "Raspberry Pi", "IoT"]
    },
    {
        slug: "pll-pcb",
        title: "PLL PCB Design",
        category: "Hardware",
        date: "2020",
        description: "A precision Phase-Locked Loop (PLL) evaluation board designed for academic frequency synthesis and modulation experiments.",
        objectives: [
            "Design a stable frequency synthesis platform for lab use.",
            "Enable modulation and demodulation experiments.",
            "Ensure signal integrity for RF testing scenarios."
        ],
        hardware: [
            { name: "KiCad", icon: "Code2" },
            { name: "Oscilloscope", icon: "Terminal" },
            { name: "Signal Generator", icon: "Cpu" }
        ],
        image: "/images/pcb.jpg",
        tags: ["PCB", "RF", "Electronics"]
    },
    {
        slug: "automated-depot",
        title: "Automated Depot",
        category: "Industrial IoT",
        date: "2021",
        description: "An end-to-end industrial automation concept focusing on high-speed inventory tracking and warehouse safety.",
        objectives: [
            "Implement RFID-based inventory tracking across multi-node conveyor lines.",
            "Develop fail-safe logic for motorized transport systems.",
            "Real-time telemetry integration with industrial SCADA-like dashboards."
        ],
        hardware: [
            { name: "RFID", icon: "Layers" },
            { name: "Motor Controller", icon: "Wrench" },
            { name: "Industrial PC", icon: "Cpu" }
        ],
        image: "/images/Smart-Supermarket.jpg",
        tags: ["Industrial", "Automation", "RFID"]
    },
    {
        slug: "ecu-validation",
        title: "ECU Validation Framework",
        category: "Automotive",
        date: "2023",
        description: "An ASPICE-compliant validation framework for UDS-based diagnostics over CAN networks. This system automates the orchestration of test cases and ECU state simulation using Vector CANoe.",
        objectives: [
            "Decouple test case definition from execution logic for maximum reusability.",
            "Automated handling of UDS diagnostic requests (Service $10, $22, $2E, etc.).",
            "Robust state machine simulation for target ECU modeling.",
            "Post-processing pipeline for log analysis and automated report generation."
        ],
        hardware: [
            { name: "Vector CANoe", icon: "Cpu" },
            { name: "CAPL", icon: "Code2" },
            { name: "Python", icon: "Terminal" },
            { name: "CAN Database (.dbc)", icon: "Layers" }
        ],
        codeLink: "https://github.com/Azzedine-prog/ECU-Validation-Framework-with-CANoe-CAPL",
        image: "/images/automotive_diag.png",
        tags: ["CANoe", "CAPL", "Diagnostics", "UDS"]
    },
    {
        slug: "autosar-demo",
        title: "AUTOSAR SWC Integration",
        category: "Automotive",
        date: "2023",
        description: "A demonstration of AUTOSAR architecture principles, featuring Sensor/Controller SWC interaction via a manually implemented RTE (Runtime Environment) abstraction layer.",
        objectives: [
            "Model VFB (Virtual Function Bus) communication between application components.",
            "Implement Sender-Receiver and Client-Server communication patterns.",
            "Develop a lightweight RTE generation concept using Python scripts.",
            "Execute component-level unit testing within a simulated harness."
        ],
        hardware: [
            { name: "C (Embedded)", icon: "Code2" },
            { name: "Python", icon: "Terminal" },
            { name: "AUTOSAR Concepts", icon: "Layers" }
        ],
        codeLink: "https://github.com/Azzedine-prog/AUTOSAR-Component-Integration-Demo",
        image: "/images/software.png",
        tags: ["AUTOSAR", "Embedded C", "RTE"]
    },
    {
        slug: "stm32-drivers",
        title: "STM32 Bare-Metal Drivers",
        category: "Embedded Systems",
        date: "2022",
        description: "Low-level peripheral drivers for the STM32F401RE microcontroller, built from the ground up using direct register manipulation to maximize performance and minimize overhead.",
        objectives: [
            "Develop custom HAL (Hardware Abstraction Layer) for GPIO, UART, and SPI.",
            "Implement DMA-based data transfers for high-speed I2C communication.",
            "Direct CMSIS register access without using CubeMX high-level abstractions.",
            "Zero-latency interrupt handling for real-time sensor processing."
        ],
        hardware: [
            { name: "NUCLEO-F401RE", icon: "Cpu" },
            { name: "C / Assembly", icon: "Code2" },
            { name: "GPIO/UART/SPI/I2C", icon: "Layers" }
        ],
        codeLink: "https://github.com/Azzedine-prog/Nucleo-stm32-F4-01RE-drivers",
        image: "/images/mcu_board_view.png",
        tags: ["STM32", "Bare-Metal", "Drivers"]
    },
    {
        slug: "fpga-rtc",
        title: "FPGA RTC & Stop Watch",
        category: "Digital Logic",
        date: "2021",
        description: "A full-scale digital timekeeping system implemented on Altera FPGA hardware, featuring sub-millisecond precision and hardware-level mode switching.",
        objectives: [
            "Synthesize precise clock dividers for 1Hz and 100Hz time domains.",
            "Implement debounced hardware switch logic for mode selection.",
            "Design a multi-segment LED driver for real-time display output.",
            "Optimize VHDL entity architecture for minimal gate usage."
        ],
        hardware: [
            { name: "FPGA EP2C20", icon: "Cpu" },
            { name: "VHDL", icon: "Code2" },
            { name: "Altera Quartus II", icon: "Terminal" }
        ],
        codeLink: "https://github.com/Azzedine-prog/STOP-WATCH-AND-RTC-FPGA-FULL-PROJECT",
        image: "/images/fpga.png",
        tags: ["VHDL", "FPGA", "Digital Logic"]
    }
];
