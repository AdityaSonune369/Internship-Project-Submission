# Minor Project 2: Zero Trust Architecture (ZTA) for Enterprise Security

This project investigates and implements a Zero Trust Architecture (ZTA) to address the vulnerabilities inherent in legacy, perimeter-based network security models.

## Overview

Shifting the focus from "network location" to strict "identity verification," this project features a simulated, multi-layered enterprise environment utilizing Docker, Nginx, and Keycloak to enforce the "Never Trust, Always Verify" principle.

### Key Features:
- **Identity-First Access:** Keycloak acts as the central Identity Provider (IdP) enforcing Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC).
- **Network Segmentation:** Docker bridge networks isolate backend API services, making them unreachable directly from the public internet.
- **Gateway Enforcement:** An Nginx API Gateway serves as the Policy Enforcement Point, intercepting, strictly routing, and validating JWT tokens for every connection attempt.

## Structure
- `Zero_Trust_Architecture_Enterprise.pdf` / `.md`: The detailed project report covering the architecture design, methodology, and findings.
- `docker-compose.yml`: The orchestration file to spin up the Keycloak identity server, Nginx gateway, and backend API.
- `nginx.conf`: The configuration file enforcing gateway routing rules and security policies.

## Usage
1. Ensure Docker and Docker Compose are installed on your system.
2. Run `docker-compose up -d` to launch the simulated Zero Trust environment.
3. Access the environment through the Nginx gateway, observing how unauthenticated traffic and lateral movement attempts are blocked.
