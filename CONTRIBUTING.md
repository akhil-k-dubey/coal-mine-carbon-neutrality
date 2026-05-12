# Coal Mine Carbon Neutrality - Contributing Guide

## Welcome!

Thank you for your interest in contributing to the Coal Mine Carbon Neutrality project. This document provides guidelines and instructions for contributing.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check existing issues to avoid duplicates
2. Create a new issue with:
   - Clear, descriptive title
   - Detailed description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details (OS, Node version, etc.)
   - Screenshots if applicable

### Suggesting Enhancements

1. Check existing issues and discussions
2. Create a new issue with:
   - Clear title describing the feature
   - Detailed description and use case
   - Suggested implementation approach (optional)
   - Examples or mockups (optional)

### Pull Requests

#### Before You Start

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Set up development environment (see SETUP.md)

#### Development Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Keep commits atomic and logical
- Update relevant documentation
- Add tests for new features
- Ensure all tests pass

#### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type**: feat, fix, docs, style, refactor, test, chore
**Scope**: backend, frontend, database, docs
**Subject**: Short description (50 chars max)

Example:
```
feat(backend): Add emission calculation API endpoint

Implement POST /api/v1/emissions/calculate endpoint
to handle mining activity data and calculate emissions.

Closes #123
```

#### Testing

- Add unit tests for new functions
- Add integration tests for API endpoints
- Test edge cases and error conditions
- Maintain or improve code coverage

```bash
# Backend
cd backend
npm test
npm run test:watch

# Frontend
cd frontend
npm test
npm run test:watch
```

#### Linting and Formatting

```bash
# Backend
cd backend
npm run lint
npm run lint:fix

# Frontend
cd frontend
npm run lint
npm run lint:fix
```

#### Submitting a Pull Request

1. Push your branch to your fork
2. Create a pull request with:
   - Clear title and description
   - Reference to related issues
   - Screenshots for UI changes
   - Checklist of testing done
3. Ensure CI/CD checks pass
4. Address review feedback promptly
5. Keep the PR focused on a single feature/fix

## Development Workflow

### Setting Up Your Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/coal-mine-carbon-neutrality.git
cd coal-mine-carbon-neutrality

# Add upstream remote
git remote add upstream https://github.com/akhil-k-dubey/coal-mine-carbon-neutrality.git

# Create feature branch
git checkout -b feature/your-feature
```

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Rebase your branch
git rebase upstream/main

# Or merge if rebase is problematic
git merge upstream/main
```

### Backend Development

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Development

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

## Project Structure

```
coal-mine-carbon-neutrality/
├── backend/              # Express.js API
│   ├── src/
│   │   ├── routes/      # API route handlers
│   │   ├── models/      # Database models
│   │   ├── controllers/ # Business logic
│   │   ├── middleware/  # Custom middleware
│   │   └── config/      # Configuration
│   └── tests/           # Test files
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   ├── store/       # Redux store
│   │   └── utils/       # Utilities
│   └── tests/           # Test files
├── database/            # Database files
│   └── schemas/         # SQL schemas
├── docs/                # Documentation
└── .github/workflows/   # CI/CD pipelines
```

## Coding Standards

### JavaScript/Node.js

- Use ES6+ features
- const/let preferred over var
- 2-space indentation
- Meaningful variable names
- Comments for complex logic
- ESLint configuration enforced

### React

- Functional components with hooks
- Custom hooks for reusable logic
- Props validation (propTypes or TypeScript)
- Semantic HTML
- Accessibility (a11y) considerations
- Component naming (PascalCase)

### SQL

- Use meaningful table/column names
- Add indexes for frequently queried columns
- Include foreign key constraints
- Use migrations for schema changes
- Comment complex queries

## Documentation

- Update README.md for new features
- Add JSDoc comments for functions
- Update API documentation (docs/API.md)
- Include examples for complex features
- Keep docs in sync with code

## Performance Guidelines

### Backend
- Use connection pooling
- Implement caching strategically
- Optimize database queries
- Use pagination for large datasets
- Monitor and log performance metrics

### Frontend
- Use React.memo for pure components
- Implement lazy loading
- Optimize re-renders
- Use proper key props in lists
- Minimize bundle size

## Security Considerations

- Never commit secrets or API keys
- Use environment variables for sensitive data
- Validate and sanitize user input
- Use parameterized queries
- Keep dependencies updated
- Follow authentication best practices

## Getting Help

- Check existing documentation
- Review similar implementations in the codebase
- Ask questions in issues or discussions
- Join our development community

## Recognition

All contributors are recognized in:
- CONTRIBUTORS.md
- GitHub contributors page
- Release notes

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to make coal mining more sustainable!
