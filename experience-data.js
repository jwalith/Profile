// window.EXPERIENCE_SHEET_URL = '';
window.EXPERIENCE_SHEET_URL = 'https://opensheet.elk.sh/1BKkSdkgpUVuD0TbAGQm5bMXoVT1emVz2DnWXGuwPzOY/Sheet1';
const experienceData = [
    {
        date: 'Jul 2025 - Present',
        title: 'AI Engineer',
        company: 'Schizophrenia & Psychosis Action Alliance',
        projects: [
            {
                name: 'Agentic RAG & Distributed Scraping Pipeline',
                tags: ['GenAI', 'RAG', 'Distributed Systems', 'Playwright', 'Redis', 'Geocoding', 'Python'],
                mission: 'Create a unified, searchable database of mental health housing resources across 50 states to help patients find care.',
                sections: [
                    {
                        title: 'Data Engineering',
                        text: 'Engineered a distributed scraping pipeline using Playwright, Celery, and Redis to normalize unstructured data from disparate state websites into a clean knowledge base.'
                    },
                    {
                        title: 'GenAI Implementation',
                        text: 'Built an Agentic RAG chatbot using LangChain and OpenAI to let users query this data naturally.'
                    },
                    {
                        title: 'Optimization',
                        text: 'Implemented Adaptive Chunking and MMR Re-ranking to improve retrieval precision by 40%, ensuring patients receive accurate, location-specific results without hallucinations.'
                    },
                    {
                        title: 'UI & Geo-Search',
                        text: 'Created an intuitive user interface for the resource search platform. Built a geo-search backend using Haversine distance with ZIP/city coordinates to locate nearby facilities. Implemented an incremental geocoding pipeline with OpenStreetMap API, cutting API calls by 90% and speeding data updates.'
                    }
                ]
            }
        ]
    },
    {
        date: 'May 2024 - Aug 2024',
        title: 'Data Science Intern',
        company: 'Welspot',
        projects: [
            {
                name: 'Predictive Financial Risk Engine & Strategy',
                tags: ['AWS SageMaker', 'XGBoost', 'Optuna', 'Causal Inference', 'Tableau', 'MLOps'],
                mission: 'Transition the client from manual risk assessment to an automated, ML-driven financial risk engine.',
                sections: [
                    {
                        title: 'Model Development',
                        text: 'Benchmarked XGBoost against PyTorch RNNs on AWS SageMaker, deploying the XGBoost model to achieve 91% predictive accuracy with low latency.'
                    },
                    {
                        title: 'Strategic R&D',
                        text: 'Went beyond prediction by using Causal Inference and ANOVA to validate risk factors, identifying 7 key features that reduced false positives by 12%.'
                    },
                    {
                        title: 'Business Intelligence',
                        text: 'Created a reproducible MLOps workflow using SHAP values to explain model decisions, visualizing insights in Tableau for the executive team.'
                    }
                ]
            }
        ]
    },
    {
        date: 'Oct 2020 - Jun 2023',
        title: 'Software Engineer',
        company: 'Tata Consultancy Services (Client: Silicon Valley Bank)',
        projects: [
            {
                name: 'Real-Time Fraud Detection System (MLOps & Inference)',
                tags: ['FastAPI', 'Docker', 'ONNX Runtime', 'MLflow', 'NumPy'],
                challenge: 'The bank needed to detect fraud in real-time without slowing down transaction processing.',
                solution: 'Architected a high-throughput inference API using FastAPI and Docker.',
                sections: [
                    {
                        title: 'Key Tech',
                        text: 'Leveraged ONNX Runtime to achieve sub-50ms latency for 100+ concurrent requests.'
                    },
                    {
                        title: 'Reliability',
                        text: 'Engineered a custom drift detection framework using NumPy/SciPy to monitor PSI on live streams, integrating with MLflow to trigger automated retraining.'
                    }
                ]
            },
            {
                name: 'Customer CRM Automation (NLP)',
                tags: ['Hugging Face', 'BERT', 'NLP', 'PyTorch'],
                challenge: 'Support teams were drowning in manual ticket reviews.',
                solution: 'Implemented an NLP-driven classification pipeline using Hugging Face transformers (BERT).',
                sections: [
                    {
                        title: 'Impact',
                        text: 'Automated routing for thousands of tickets, eliminating 2,500+ hours of manual work and saving $175K annually.'
                    }
                ]
            },
            {
                name: 'Banking Data Platform Modernization (Data Engineering)',
                tags: ['Azure Synapse', 'PySpark', 'Elasticsearch', 'Redis'],
                sections: [
                    {
                        title: 'Scale',
                        text: 'Unified terabytes of fragmented data using Azure Synapse and PySpark ETL pipelines.'
                    },
                    {
                        title: 'Performance',
                        text: 'Optimized transaction history search using Elasticsearch and Redis, reducing query times by 40%.'
                    }
                ]
            }
        ]
    },
    {
        date: 'Mar 2019 - Jun 2019',
        title: 'Machine Learning Engineer Intern',
        company: 'SmartBridge',
        projects: [
            {
                name: 'IoT Pet Feeding Detection System',
                tags: ['YOLO', 'TensorFlow', 'Computer Vision', 'Kafka', 'IoT'],
                challenge: 'Pet owners needed a reliable way to monitor whether their pets were actually eating from automated feeders in real-time.',
                solution: 'Built and deployed a lightweight computer vision pipeline using YOLO and TensorFlow, connected to an IoT camera and streaming events through Kafka.',
                sections: [
                    {
                        title: 'Model Engineering',
                        text: 'Fine-tuned YOLO to detect pet presence and feeding actions under varying lighting conditions, achieving high detection accuracy on low-cost hardware.'
                    },
                    {
                        title: 'System Design',
                        text: 'Integrated the model into an edge-friendly pipeline with Kafka-based event streaming, enabling real-time alerts when feeding events were missed.'
                    }
                ]
            }
        ]
    }
];

window.experienceData = experienceData;
