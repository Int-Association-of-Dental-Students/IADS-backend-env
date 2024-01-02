# ☕️ IADS Web Application Backend

Welcome to the **IADS Web Application Backend** GitHub repository! This repository is the central hub for the backend of the main web application of IADS. Here, we maintain two branches for development and production (live). This README will guide you through the branch structure and how to work with this repository to add, modify, and edit IADS Web Application's API endpoint.

## Branch Structure
- 🚀 **main**: The production branch for the main site.
- 🌱 **Development**: The development branch where new features and improvements are developed.

## CI/CD - Continuous Integration, Continuous Deployment
- The main branch is set up with AWS EC2 service for continuous builds and deployment. Access IADS AWS project to monitor deployments. The deployments are automatically triggered by AWS once there are any changes in the main branch.

## 🚨 Workflow
Our workflow is designed to ensure a stable and reliable release process. Here's how it works:

1. Start with the **Development** branch. This branch should always be synced with the latest main branch before adding or editing a further update.
2. Create a feature or change a specific branch from **Development** for your work, name it however you like.
3. When your edit is complete, merge it with the **Development** branch and test it first
4. Your changes should be thoroughly tested on the development branch (all use cases, screen dimensions, and browsers)
5. After successful testing, create a pull request from **Development** to the respective **main** branch.
7. Pull requests from **Development** to **main** branches should be carefully reviewed before merging to ensure quality and stability.

<br />

## Technical Worlflow (beginner friendly)
#### 1. Ensure you have the latest changes from the remote repository
```
git checkout development
git pull origin development
```
#### 2. Create a new branch for your feature/change
```git checkout -b feature-branch-name```

#### 3. Make your changes, commit them, and push to the remote repository
```
git add .
git commit -m "Your commit message"
git push origin feature-branch-name
```

#### 4. Switch back to the development branch
```
git checkout development
```

#### 5. Merge your changes into the development branch and test
```
git merge feature-branch-name
```

#### 6. After successful testing on the development branch, create a pull request
#### from development to main using the GitHub interface

#### 7. After the pull request is merged, switch back to the development branch
```
git checkout development
```

#### 8. Update the development branch to be like the main branch
```
git pull origin main
```

<br />
<br />
Make sure to replace "feature-branch-name" with a meaningful name that corresponds to the feature or change you are working on. Additionally, provide descriptive commit messages to explain the purpose of each commit.

<br />
Feel free to reach out if you have any questions or need assistance. Happy coding! 🚀👩‍💻👨‍💻

