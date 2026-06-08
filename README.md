# Monitoring & Observability Stack with Prometheus and Grafana

## Project Overview

This project demonstrates a complete Monitoring and Observability Stack using Prometheus, Grafana, Alertmanager, Node Exporter, and cAdvisor. The system monitors a containerized Node.js application, collects metrics, visualizes performance dashboards, and generates alerts for critical incidents.

The project simulates a real-world production monitoring environment commonly used by DevOps Engineers, Site Reliability Engineers (SREs), and Cloud Engineers.

---

## Architecture


<img width="1461" height="1076" alt="image" src="https://github.com/user-attachments/assets/8a207bc1-1c8a-4e10-831e-66c82994ca7c" />


---

## Features

* Application Monitoring
* Metrics Collection using Prometheus
* Dashboard Visualization using Grafana
* Alert Management using Alertmanager
* Host Monitoring using Node Exporter
* Container Monitoring using cAdvisor
* Real-Time Alerting
* Failure Simulation Testing
* Docker Compose Deployment

---

## Technologies Used

| Category          | Tool           |
| ----------------- | -------------- |
| Monitoring        | Prometheus     |
| Visualization     | Grafana        |
| Alerting          | Alertmanager   |
| Container Metrics | cAdvisor       |
| System Metrics    | Node Exporter  |
| Backend           | Node.js        |
| Containerization  | Docker         |
| Orchestration     | Docker Compose |
| Cloud Platform    | AWS EC2        |

---

## Project Structure

```text
Monitoring-Observability-Project/

├── app
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── prometheus
│   ├── prometheus.yml
│   └── alert.rules.yml
│
├── alertmanager
│   └── alertmanager.yml
│
├── grafana
│
├── docker-compose.yml
│
└── README.md
```

---

## AWS Infrastructure

| Resource         | Configuration        |
| ---------------- | -------------------- |
| EC2 Instance     | m7i-flex.large       |
| Operating System | Ubuntu 24.04 LTS     |
| Storage          | 30 GB gp3            |
| Region           | AWS Region of Choice |

---

## Services and Ports

| Service          | Port |
| ---------------- | ---- |
| Node Application | 3000 |
| Grafana          | 3001 |
| Prometheus       | 9090 |
| Alertmanager     | 9093 |
| Node Exporter    | 9100 |
| cAdvisor         | 8080 |

---

## Deployment Steps

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Monitoring-Observability-Project.git

cd Monitoring-Observability-Project
```

### Start Containers

```bash
docker compose up -d --build
```

### Verify Containers

```bash
docker ps
```

---

## Access URLs

### Application

```text
http://EC2_PUBLIC_IP:3000
```

### Metrics Endpoint

```text
http://EC2_PUBLIC_IP:3000/metrics
```

### Prometheus

```text
http://EC2_PUBLIC_IP:9090
```

### Grafana

```text
http://EC2_PUBLIC_IP:3001
```

### Alertmanager

```text
http://EC2_PUBLIC_IP:9093
```

### Node Exporter

```text
http://EC2_PUBLIC_IP:9100
```

### cAdvisor

```text
http://EC2_PUBLIC_IP:8080
```

---

## Grafana Configuration

### Default Login

```text
Username: admin
Password: admin
```

### Add Prometheus Data Source

```text
Connections
→ Data Sources
→ Add Data Source
→ Prometheus
```

Prometheus URL:

```text
http://prometheus:9090
```

---

## Dashboard Metrics

The following metrics are monitored:

### Application Metrics

* Total Requests
* Error Count
* Response Time
* Application Availability

### System Metrics

* CPU Usage
* Memory Usage
* Disk Usage
* Network Statistics

### Container Metrics

* Container CPU Usage
* Container Memory Usage
* Container Health

---

## Alert Rules

### Application Down

Triggers when the application becomes unavailable.

### High Error Rate

Triggers when error requests exceed threshold limits.

### High CPU Usage

Triggers when CPU utilization exceeds configured limits.

### Memory Threshold Exceeded

Triggers when memory consumption becomes critical.

---

## Failure Simulation

### Stop Application

```bash
docker stop node-app
```

Expected Result:

* Prometheus detects outage
* Alertmanager receives alert
* Grafana dashboards show downtime

### Generate Errors

```bash
curl http://localhost:3000/error
```

Expected Result:

* Error metrics increase
* Alert rules trigger

---

## Screenshots

### AWS EC2 Instance

Add screenshot here

### Application run

<img width="2156" height="690" alt="image" src="https://github.com/user-attachments/assets/0c3f2354-28df-40e9-91e3-dcf8c3c73a6e" />


### Docker Containers Running

<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/90a25ebc-3e6f-417c-89ea-0f7496555180" />


### Prometheus Targets

### Prometheus Alerts

<img width="2876" height="1236" alt="image" src="https://github.com/user-attachments/assets/b389668e-b2c8-4027-9828-2e59e699e5cc" />



### Grafana Dashboard

<img width="1276" height="1488" alt="image" src="https://github.com/user-attachments/assets/c9209357-986f-40e3-a2a3-b4ca20bf7ddf" />

<img width="2008" height="1462" alt="image" src="https://github.com/user-attachments/assets/f1a0820c-08ef-46e4-9ac1-7dde5fb86cdc" />

<img width="2740" height="1278" alt="image" src="https://github.com/user-attachments/assets/62c62e2f-17eb-49e9-9404-cbdba94b008d" />



### Alertmanager Dashboard

<img width="2844" height="1386" alt="image" src="https://github.com/user-attachments/assets/1ff26d00-a840-46fa-877d-853eecf0caa0" />


### Node Exporter Metrics

<img width="2880" height="1220" alt="image" src="https://github.com/user-attachments/assets/650f68ad-a760-4563-a49b-93edc1082b57" />


### cAdvisor Metrics

<img width="2784" height="1418" alt="image" src="https://github.com/user-attachments/assets/49aad896-7aea-4c7e-9592-69361655b5b6" />

<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/60080c39-8711-414e-b5f6-c3009b4e4b15" />

<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/7b431f1e-02d2-4292-8d3e-728e72ef0aa8" />

---

## Learning Outcomes

* Monitoring Fundamentals
* Observability Concepts
* Metrics Collection
* Dashboard Creation
* Alert Configuration
* Incident Detection
* Infrastructure Monitoring
* Production Reliability Practices

---

## Resume Highlights

* Built a production-grade monitoring stack using Prometheus, Grafana, Alertmanager, Node Exporter, and cAdvisor.
* Implemented application, infrastructure, and container monitoring.
* Configured automated alerting for service outages and performance issues.
* Developed real-time dashboards for system observability.
* Deployed and managed the solution using Docker Compose on AWS EC2.

---

## Author

Jeny

DevOps Engineer | Cloud Enthusiast | AWS | Docker | Kubernetes | Terraform | CI/CD
