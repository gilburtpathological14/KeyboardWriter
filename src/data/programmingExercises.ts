/**
 * Programming Exercises Data
 * Extended exercises for developers including multiple languages,
 * Git workflows, Vim commands, Regex, and more
 */

// Programming Languages with code snippets
export interface CodeSnippet {
  id: string;
  language: string;
  title: string;
  code: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description?: string;
}

// Rust Code Snippets
export const RUST_SNIPPETS: CodeSnippet[] = [
  {
    id: 'rust-hello',
    language: 'rust',
    title: 'Hello World',
    code: `fn main() {
    println!("Hello, World!");
}`,
    difficulty: 'beginner',
  },
  {
    id: 'rust-variables',
    language: 'rust',
    title: 'Variables & Mutability',
    code: `fn main() {
    let x = 5;
    let mut y = 10;
    y = y + x;
    println!("y = {}", y);
}`,
    difficulty: 'beginner',
  },
  {
    id: 'rust-struct',
    language: 'rust',
    title: 'Struct & Impl',
    code: `struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}`,
    difficulty: 'intermediate',
  },
  {
    id: 'rust-enum',
    language: 'rust',
    title: 'Enums & Pattern Matching',
    code: `enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}

fn process(msg: Message) {
    match msg {
        Message::Quit => println!("Quit"),
        Message::Move { x, y } => println!("Move to {}, {}", x, y),
        Message::Write(text) => println!("{}", text),
    }
}`,
    difficulty: 'intermediate',
  },
  {
    id: 'rust-result',
    language: 'rust',
    title: 'Result & Error Handling',
    code: `use std::fs::File;
use std::io::Read;

fn read_file(path: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}`,
    difficulty: 'advanced',
  },
  {
    id: 'rust-lifetime',
    language: 'rust',
    title: 'Lifetimes',
    code: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}`,
    difficulty: 'advanced',
  },
];

// Go Code Snippets
export const GO_SNIPPETS: CodeSnippet[] = [
  {
    id: 'go-hello',
    language: 'go',
    title: 'Hello World',
    code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
    difficulty: 'beginner',
  },
  {
    id: 'go-variables',
    language: 'go',
    title: 'Variables & Types',
    code: `package main

import "fmt"

func main() {
    var name string = "Go"
    age := 15
    isAwesome := true
    fmt.Printf("%s is %d years old. Awesome: %t", name, age, isAwesome)
}`,
    difficulty: 'beginner',
  },
  {
    id: 'go-struct',
    language: 'go',
    title: 'Structs & Methods',
    code: `type User struct {
    Name  string
    Email string
    Age   int
}

func (u *User) IsAdult() bool {
    return u.Age >= 18
}

func (u *User) String() string {
    return fmt.Sprintf("%s <%s>", u.Name, u.Email)
}`,
    difficulty: 'intermediate',
  },
  {
    id: 'go-goroutine',
    language: 'go',
    title: 'Goroutines & Channels',
    code: `func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("worker %d processing job %d\\n", id, j)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }
}`,
    difficulty: 'advanced',
  },
  {
    id: 'go-interface',
    language: 'go',
    title: 'Interfaces',
    code: `type Shape interface {
    Area() float64
    Perimeter() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}`,
    difficulty: 'intermediate',
  },
];

// SQL Snippets
export const SQL_SNIPPETS: CodeSnippet[] = [
  {
    id: 'sql-select',
    language: 'sql',
    title: 'Basic SELECT',
    code: `SELECT id, name, email
FROM users
WHERE active = true
ORDER BY created_at DESC
LIMIT 10;`,
    difficulty: 'beginner',
  },
  {
    id: 'sql-join',
    language: 'sql',
    title: 'JOIN Operations',
    code: `SELECT u.name, o.total, o.created_at
FROM users u
INNER JOIN orders o ON u.id = o.user_id
LEFT JOIN addresses a ON u.id = a.user_id
WHERE o.total > 100
ORDER BY o.created_at DESC;`,
    difficulty: 'intermediate',
  },
  {
    id: 'sql-subquery',
    language: 'sql',
    title: 'Subqueries',
    code: `SELECT name, email
FROM users
WHERE id IN (
    SELECT user_id
    FROM orders
    GROUP BY user_id
    HAVING COUNT(*) > 5
);`,
    difficulty: 'intermediate',
  },
  {
    id: 'sql-cte',
    language: 'sql',
    title: 'Common Table Expressions',
    code: `WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', created_at) AS month,
        SUM(total) AS revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', created_at)
)
SELECT month, revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_month,
    revenue - LAG(revenue) OVER (ORDER BY month) AS growth
FROM monthly_sales;`,
    difficulty: 'advanced',
  },
  {
    id: 'sql-create',
    language: 'sql',
    title: 'CREATE TABLE',
    code: `CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INTEGER REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category_id);`,
    difficulty: 'intermediate',
  },
];

// C/C++ Snippets
export const CPP_SNIPPETS: CodeSnippet[] = [
  {
    id: 'cpp-hello',
    language: 'cpp',
    title: 'Hello World',
    code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    difficulty: 'beginner',
  },
  {
    id: 'cpp-class',
    language: 'cpp',
    title: 'Classes & Objects',
    code: `class Rectangle {
private:
    int width, height;
    
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    
    int area() const {
        return width * height;
    }
    
    void resize(int w, int h) {
        width = w;
        height = h;
    }
};`,
    difficulty: 'intermediate',
  },
  {
    id: 'cpp-template',
    language: 'cpp',
    title: 'Templates',
    code: `template <typename T>
class Stack {
private:
    std::vector<T> elements;
    
public:
    void push(const T& elem) {
        elements.push_back(elem);
    }
    
    T pop() {
        T elem = elements.back();
        elements.pop_back();
        return elem;
    }
    
    bool empty() const {
        return elements.empty();
    }
};`,
    difficulty: 'advanced',
  },
  {
    id: 'cpp-smartptr',
    language: 'cpp',
    title: 'Smart Pointers',
    code: `#include <memory>

class Resource {
public:
    void use() { /* ... */ }
};

void example() {
    auto unique = std::make_unique<Resource>();
    auto shared = std::make_shared<Resource>();
    std::weak_ptr<Resource> weak = shared;
    
    unique->use();
    shared->use();
    
    if (auto locked = weak.lock()) {
        locked->use();
    }
}`,
    difficulty: 'advanced',
  },
];

// Docker/YAML Snippets
export const DOCKER_SNIPPETS: CodeSnippet[] = [
  {
    id: 'docker-basic',
    language: 'dockerfile',
    title: 'Basic Dockerfile',
    code: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]`,
    difficulty: 'beginner',
  },
  {
    id: 'docker-multistage',
    language: 'dockerfile',
    title: 'Multi-Stage Build',
    code: `FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
    difficulty: 'intermediate',
  },
  {
    id: 'docker-compose',
    language: 'yaml',
    title: 'Docker Compose',
    code: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://db:5432/app
    depends_on:
      - db
      
  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret
      
volumes:
  postgres_data:`,
    difficulty: 'intermediate',
  },
];

// HTML/CSS Snippets
export const HTML_CSS_SNIPPETS: CodeSnippet[] = [
  {
    id: 'html-basic',
    language: 'html',
    title: 'HTML5 Boilerplate',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome</h1>
    </main>
</body>
</html>`,
    difficulty: 'beginner',
  },
  {
    id: 'css-flexbox',
    language: 'css',
    title: 'Flexbox Layout',
    code: `.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.item {
    flex: 1 1 300px;
    padding: 1rem;
    background: #f0f0f0;
    border-radius: 8px;
}`,
    difficulty: 'beginner',
  },
  {
    id: 'css-grid',
    language: 'css',
    title: 'CSS Grid Layout',
    code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto;
    gap: 1.5rem;
    padding: 2rem;
}

.grid-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 2rem;
    color: white;
}`,
    difficulty: 'intermediate',
  },
];

// Git Commands & Workflows
export interface GitCommand {
  id: string;
  command: string;
  description: string;
  category: 'basic' | 'branching' | 'remote' | 'advanced' | 'github';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const GIT_COMMANDS: GitCommand[] = [
  // Basic Commands
  {
    id: 'git-init',
    command: 'git init',
    description: 'Neues Repository erstellen',
    category: 'basic',
    difficulty: 'beginner',
  },
  {
    id: 'git-clone',
    command: 'git clone https://github.com/user/repo.git',
    description: 'Repository klonen',
    category: 'basic',
    difficulty: 'beginner',
  },
  {
    id: 'git-add',
    command: 'git add .',
    description: 'Alle Änderungen stagen',
    category: 'basic',
    difficulty: 'beginner',
  },
  {
    id: 'git-commit',
    command: 'git commit -m "feat: add new feature"',
    description: 'Commit erstellen',
    category: 'basic',
    difficulty: 'beginner',
  },
  {
    id: 'git-status',
    command: 'git status',
    description: 'Status anzeigen',
    category: 'basic',
    difficulty: 'beginner',
  },
  {
    id: 'git-log',
    command: 'git log --oneline --graph',
    description: 'Commit-Historie anzeigen',
    category: 'basic',
    difficulty: 'beginner',
  },
  {
    id: 'git-diff',
    command: 'git diff HEAD~1',
    description: 'Änderungen vergleichen',
    category: 'basic',
    difficulty: 'beginner',
  },

  // Branching
  {
    id: 'git-branch',
    command: 'git branch feature/new-feature',
    description: 'Neuen Branch erstellen',
    category: 'branching',
    difficulty: 'beginner',
  },
  {
    id: 'git-checkout',
    command: 'git checkout -b feature/login',
    description: 'Branch erstellen und wechseln',
    category: 'branching',
    difficulty: 'beginner',
  },
  {
    id: 'git-switch',
    command: 'git switch -c hotfix/critical-bug',
    description: 'Neuer Branch (moderner Syntax)',
    category: 'branching',
    difficulty: 'beginner',
  },
  {
    id: 'git-merge',
    command: 'git merge feature/login --no-ff',
    description: 'Branch mergen',
    category: 'branching',
    difficulty: 'intermediate',
  },
  {
    id: 'git-rebase',
    command: 'git rebase main',
    description: 'Commits auf main rebasen',
    category: 'branching',
    difficulty: 'intermediate',
  },
  {
    id: 'git-rebase-i',
    command: 'git rebase -i HEAD~3',
    description: 'Interaktiver Rebase',
    category: 'branching',
    difficulty: 'advanced',
  },
  {
    id: 'git-cherry-pick',
    command: 'git cherry-pick abc123',
    description: 'Einzelnen Commit übernehmen',
    category: 'branching',
    difficulty: 'intermediate',
  },

  // Remote Operations
  {
    id: 'git-push',
    command: 'git push origin main',
    description: 'Push zu Remote',
    category: 'remote',
    difficulty: 'beginner',
  },
  {
    id: 'git-pull',
    command: 'git pull --rebase origin main',
    description: 'Pull mit Rebase',
    category: 'remote',
    difficulty: 'intermediate',
  },
  {
    id: 'git-fetch',
    command: 'git fetch --all --prune',
    description: 'Alle Remotes fetchen',
    category: 'remote',
    difficulty: 'intermediate',
  },
  {
    id: 'git-remote',
    command: 'git remote add upstream https://github.com/original/repo.git',
    description: 'Remote hinzufügen',
    category: 'remote',
    difficulty: 'intermediate',
  },
  {
    id: 'git-push-force',
    command: 'git push --force-with-lease origin feature',
    description: 'Sicherer Force Push',
    category: 'remote',
    difficulty: 'advanced',
  },

  // Advanced
  {
    id: 'git-stash',
    command: 'git stash push -m "WIP: feature"',
    description: 'Änderungen stashen',
    category: 'advanced',
    difficulty: 'intermediate',
  },
  {
    id: 'git-stash-pop',
    command: 'git stash pop',
    description: 'Stash anwenden',
    category: 'advanced',
    difficulty: 'intermediate',
  },
  {
    id: 'git-reset',
    command: 'git reset --soft HEAD~1',
    description: 'Soft Reset (behält Änderungen)',
    category: 'advanced',
    difficulty: 'intermediate',
  },
  {
    id: 'git-reset-hard',
    command: 'git reset --hard HEAD~1',
    description: 'Hard Reset (verwirft alles)',
    category: 'advanced',
    difficulty: 'advanced',
  },
  {
    id: 'git-reflog',
    command: 'git reflog',
    description: 'Alle Aktionen anzeigen',
    category: 'advanced',
    difficulty: 'advanced',
  },
  {
    id: 'git-bisect',
    command: 'git bisect start HEAD v1.0 --',
    description: 'Bug-Commit finden',
    category: 'advanced',
    difficulty: 'advanced',
  },
  {
    id: 'git-worktree',
    command: 'git worktree add ../feature-branch feature',
    description: 'Worktree erstellen',
    category: 'advanced',
    difficulty: 'advanced',
  },

  // GitHub CLI
  {
    id: 'gh-pr-create',
    command: 'gh pr create --title "feat: add login" --body "Description"',
    description: 'PR erstellen',
    category: 'github',
    difficulty: 'intermediate',
  },
  {
    id: 'gh-pr-list',
    command: 'gh pr list --state open --author @me',
    description: 'PRs auflisten',
    category: 'github',
    difficulty: 'beginner',
  },
  {
    id: 'gh-pr-checkout',
    command: 'gh pr checkout 123',
    description: 'PR auschecken',
    category: 'github',
    difficulty: 'intermediate',
  },
  {
    id: 'gh-pr-merge',
    command: 'gh pr merge 123 --squash --delete-branch',
    description: 'PR mergen',
    category: 'github',
    difficulty: 'intermediate',
  },
  {
    id: 'gh-issue-create',
    command: 'gh issue create --title "Bug: ..." --label bug',
    description: 'Issue erstellen',
    category: 'github',
    difficulty: 'beginner',
  },
  {
    id: 'gh-repo-clone',
    command: 'gh repo clone owner/repo',
    description: 'Repo klonen',
    category: 'github',
    difficulty: 'beginner',
  },
  {
    id: 'gh-repo-fork',
    command: 'gh repo fork --clone',
    description: 'Repo forken',
    category: 'github',
    difficulty: 'intermediate',
  },
  {
    id: 'gh-workflow-run',
    command: 'gh workflow run deploy.yml -f environment=prod',
    description: 'Workflow starten',
    category: 'github',
    difficulty: 'advanced',
  },
  {
    id: 'gh-release',
    command: 'gh release create v1.0.0 --generate-notes',
    description: 'Release erstellen',
    category: 'github',
    difficulty: 'intermediate',
  },
];

// Git Workflow Scenarios
export interface GitWorkflow {
  id: string;
  title: string;
  description: string;
  steps: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const GIT_WORKFLOWS: GitWorkflow[] = [
  {
    id: 'workflow-feature',
    title: 'Feature Branch Workflow',
    description: 'Neues Feature entwickeln und mergen',
    steps: [
      'git checkout main',
      'git pull origin main',
      'git checkout -b feature/user-authentication',
      'git add .',
      'git commit -m "feat: implement user login"',
      'git push -u origin feature/user-authentication',
      'gh pr create --title "feat: user authentication" --body "Implements login/logout"',
    ],
    difficulty: 'beginner',
  },
  {
    id: 'workflow-hotfix',
    title: 'Hotfix Workflow',
    description: 'Kritischen Bug schnell fixen',
    steps: [
      'git checkout main',
      'git pull origin main',
      'git checkout -b hotfix/critical-security-fix',
      'git add .',
      'git commit -m "fix: patch security vulnerability"',
      'git push origin hotfix/critical-security-fix',
      'gh pr create --title "fix: critical security patch" --label "priority:critical"',
      'gh pr merge --squash --delete-branch',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'workflow-rebase',
    title: 'Feature Rebase Workflow',
    description: 'Feature Branch auf main rebasen',
    steps: [
      'git checkout feature/my-feature',
      'git fetch origin main',
      'git rebase origin/main',
      'git push --force-with-lease origin feature/my-feature',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'workflow-squash',
    title: 'Commits Squashen',
    description: 'Mehrere Commits zu einem zusammenfassen',
    steps: [
      'git log --oneline -5',
      'git rebase -i HEAD~3',
      'git push --force-with-lease origin feature',
    ],
    difficulty: 'advanced',
  },
  {
    id: 'workflow-conflict',
    title: 'Merge Conflict lösen',
    description: 'Konflikte beim Mergen beheben',
    steps: [
      'git merge feature/other-branch',
      'git status',
      'git add .',
      'git commit -m "merge: resolve conflicts with other-branch"',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'workflow-fork',
    title: 'Fork Workflow (Open Source)',
    description: 'Zu einem Open Source Projekt beitragen',
    steps: [
      'gh repo fork original/repo --clone',
      'git remote add upstream https://github.com/original/repo.git',
      'git checkout -b feature/my-contribution',
      'git add .',
      'git commit -m "feat: add new feature"',
      'git push origin feature/my-contribution',
      'gh pr create --repo original/repo --title "feat: my contribution"',
    ],
    difficulty: 'intermediate',
  },
];

// Vim Commands
export interface VimCommand {
  id: string;
  keys: string;
  description: string;
  category: 'movement' | 'editing' | 'visual' | 'search' | 'files' | 'advanced';
  mode: 'normal' | 'insert' | 'visual' | 'command';
}

export const VIM_COMMANDS: VimCommand[] = [
  // Movement
  {
    id: 'vim-hjkl',
    keys: 'h j k l',
    description: 'Links, Unten, Oben, Rechts',
    category: 'movement',
    mode: 'normal',
  },
  { id: 'vim-w', keys: 'w', description: 'Nächstes Wort', category: 'movement', mode: 'normal' },
  { id: 'vim-b', keys: 'b', description: 'Vorheriges Wort', category: 'movement', mode: 'normal' },
  { id: 'vim-e', keys: 'e', description: 'Ende des Wortes', category: 'movement', mode: 'normal' },
  { id: 'vim-0', keys: '0', description: 'Zeilenanfang', category: 'movement', mode: 'normal' },
  { id: 'vim-dollar', keys: '$', description: 'Zeilenende', category: 'movement', mode: 'normal' },
  { id: 'vim-gg', keys: 'gg', description: 'Dateianfang', category: 'movement', mode: 'normal' },
  { id: 'vim-G', keys: 'G', description: 'Dateiende', category: 'movement', mode: 'normal' },
  {
    id: 'vim-ctrl-d',
    keys: 'Ctrl+d',
    description: 'Halbe Seite runter',
    category: 'movement',
    mode: 'normal',
  },
  {
    id: 'vim-ctrl-u',
    keys: 'Ctrl+u',
    description: 'Halbe Seite hoch',
    category: 'movement',
    mode: 'normal',
  },
  {
    id: 'vim-percent',
    keys: '%',
    description: 'Zur passenden Klammer',
    category: 'movement',
    mode: 'normal',
  },

  // Editing
  { id: 'vim-i', keys: 'i', description: 'Insert vor Cursor', category: 'editing', mode: 'normal' },
  {
    id: 'vim-a',
    keys: 'a',
    description: 'Insert nach Cursor',
    category: 'editing',
    mode: 'normal',
  },
  {
    id: 'vim-I',
    keys: 'I',
    description: 'Insert am Zeilenanfang',
    category: 'editing',
    mode: 'normal',
  },
  {
    id: 'vim-A',
    keys: 'A',
    description: 'Insert am Zeilenende',
    category: 'editing',
    mode: 'normal',
  },
  { id: 'vim-o', keys: 'o', description: 'Neue Zeile unten', category: 'editing', mode: 'normal' },
  { id: 'vim-O', keys: 'O', description: 'Neue Zeile oben', category: 'editing', mode: 'normal' },
  { id: 'vim-x', keys: 'x', description: 'Zeichen löschen', category: 'editing', mode: 'normal' },
  { id: 'vim-dd', keys: 'dd', description: 'Zeile löschen', category: 'editing', mode: 'normal' },
  { id: 'vim-dw', keys: 'dw', description: 'Wort löschen', category: 'editing', mode: 'normal' },
  {
    id: 'vim-d$',
    keys: 'd$',
    description: 'Bis Zeilenende löschen',
    category: 'editing',
    mode: 'normal',
  },
  { id: 'vim-yy', keys: 'yy', description: 'Zeile kopieren', category: 'editing', mode: 'normal' },
  {
    id: 'vim-p',
    keys: 'p',
    description: 'Einfügen nach Cursor',
    category: 'editing',
    mode: 'normal',
  },
  {
    id: 'vim-P',
    keys: 'P',
    description: 'Einfügen vor Cursor',
    category: 'editing',
    mode: 'normal',
  },
  { id: 'vim-u', keys: 'u', description: 'Undo', category: 'editing', mode: 'normal' },
  { id: 'vim-ctrl-r', keys: 'Ctrl+r', description: 'Redo', category: 'editing', mode: 'normal' },
  { id: 'vim-ciw', keys: 'ciw', description: 'Wort ändern', category: 'editing', mode: 'normal' },
  {
    id: 'vim-cit',
    keys: 'cit',
    description: 'Tag-Inhalt ändern',
    category: 'editing',
    mode: 'normal',
  },

  // Visual Mode
  { id: 'vim-v', keys: 'v', description: 'Visual Mode', category: 'visual', mode: 'normal' },
  { id: 'vim-V', keys: 'V', description: 'Visual Line Mode', category: 'visual', mode: 'normal' },
  {
    id: 'vim-ctrl-v',
    keys: 'Ctrl+v',
    description: 'Visual Block Mode',
    category: 'visual',
    mode: 'normal',
  },
  {
    id: 'vim-viw',
    keys: 'viw',
    description: 'Wort selektieren',
    category: 'visual',
    mode: 'normal',
  },
  {
    id: 'vim-vib',
    keys: 'vi{',
    description: 'Block {} selektieren',
    category: 'visual',
    mode: 'normal',
  },

  // Search
  {
    id: 'vim-slash',
    keys: '/pattern',
    description: 'Vorwärts suchen',
    category: 'search',
    mode: 'normal',
  },
  {
    id: 'vim-question',
    keys: '?pattern',
    description: 'Rückwärts suchen',
    category: 'search',
    mode: 'normal',
  },
  { id: 'vim-n', keys: 'n', description: 'Nächstes Ergebnis', category: 'search', mode: 'normal' },
  {
    id: 'vim-N',
    keys: 'N',
    description: 'Vorheriges Ergebnis',
    category: 'search',
    mode: 'normal',
  },
  {
    id: 'vim-star',
    keys: '*',
    description: 'Wort unter Cursor suchen',
    category: 'search',
    mode: 'normal',
  },
  {
    id: 'vim-substitute',
    keys: ':%s/old/new/g',
    description: 'Suchen & Ersetzen',
    category: 'search',
    mode: 'command',
  },

  // Files
  { id: 'vim-save', keys: ':w', description: 'Speichern', category: 'files', mode: 'command' },
  { id: 'vim-quit', keys: ':q', description: 'Beenden', category: 'files', mode: 'command' },
  {
    id: 'vim-savequit',
    keys: ':wq',
    description: 'Speichern & Beenden',
    category: 'files',
    mode: 'command',
  },
  {
    id: 'vim-forcequit',
    keys: ':q!',
    description: 'Ohne Speichern beenden',
    category: 'files',
    mode: 'command',
  },
  {
    id: 'vim-edit',
    keys: ':e filename',
    description: 'Datei öffnen',
    category: 'files',
    mode: 'command',
  },
  {
    id: 'vim-split',
    keys: ':sp filename',
    description: 'Horizontal teilen',
    category: 'files',
    mode: 'command',
  },
  {
    id: 'vim-vsplit',
    keys: ':vsp filename',
    description: 'Vertikal teilen',
    category: 'files',
    mode: 'command',
  },

  // Advanced
  {
    id: 'vim-macro-record',
    keys: 'qa',
    description: 'Makro aufnehmen in a',
    category: 'advanced',
    mode: 'normal',
  },
  {
    id: 'vim-macro-stop',
    keys: 'q',
    description: 'Makro stoppen',
    category: 'advanced',
    mode: 'normal',
  },
  {
    id: 'vim-macro-play',
    keys: '@a',
    description: 'Makro a abspielen',
    category: 'advanced',
    mode: 'normal',
  },
  {
    id: 'vim-dot',
    keys: '.',
    description: 'Letzte Aktion wiederholen',
    category: 'advanced',
    mode: 'normal',
  },
  {
    id: 'vim-marks',
    keys: 'ma',
    description: 'Mark a setzen',
    category: 'advanced',
    mode: 'normal',
  },
  {
    id: 'vim-goto-mark',
    keys: "'a",
    description: 'Zu Mark a springen',
    category: 'advanced',
    mode: 'normal',
  },
];

// Regex Patterns
export interface RegexPattern {
  id: string;
  pattern: string;
  description: string;
  example: string;
  matches: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const REGEX_PATTERNS: RegexPattern[] = [
  {
    id: 'regex-email',
    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
    description: 'E-Mail Adressen',
    example: 'user@example.com',
    matches: ['user@example.com', 'test.user@domain.org'],
    difficulty: 'intermediate',
  },
  {
    id: 'regex-url',
    pattern: 'https?://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/\\S*)?',
    description: 'URLs',
    example: 'https://example.com/path',
    matches: ['https://example.com', 'http://test.org/page'],
    difficulty: 'intermediate',
  },
  {
    id: 'regex-phone',
    pattern: '\\+?[0-9]{1,3}[- ]?\\(?[0-9]{3}\\)?[- ]?[0-9]{3}[- ]?[0-9]{4}',
    description: 'Telefonnummern',
    example: '+1 (555) 123-4567',
    matches: ['+1 (555) 123-4567', '555-123-4567'],
    difficulty: 'intermediate',
  },
  {
    id: 'regex-ip',
    pattern: '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b',
    description: 'IPv4 Adressen',
    example: '192.168.1.1',
    matches: ['192.168.1.1', '10.0.0.1'],
    difficulty: 'intermediate',
  },
  {
    id: 'regex-date',
    pattern: '\\d{4}-\\d{2}-\\d{2}',
    description: 'ISO Datum',
    example: '2024-01-15',
    matches: ['2024-01-15', '2023-12-31'],
    difficulty: 'beginner',
  },
  {
    id: 'regex-hex',
    pattern: '#[0-9A-Fa-f]{6}\\b',
    description: 'Hex Farbcodes',
    example: '#FF5733',
    matches: ['#FF5733', '#000000'],
    difficulty: 'beginner',
  },
  {
    id: 'regex-uuid',
    pattern: '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}',
    description: 'UUIDs',
    example: '550e8400-e29b-41d4-a716-446655440000',
    matches: ['550e8400-e29b-41d4-a716-446655440000'],
    difficulty: 'intermediate',
  },
  {
    id: 'regex-password',
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
    description: 'Starkes Passwort',
    example: 'Pass@word1',
    matches: ['Pass@word1', 'Secure$123'],
    difficulty: 'advanced',
  },
  {
    id: 'regex-html-tag',
    pattern: '<([a-z]+)[^>]*>(.*?)</\\1>',
    description: 'HTML Tags',
    example: '<div class="test">content</div>',
    matches: ['<div>text</div>', '<span>content</span>'],
    difficulty: 'advanced',
  },
  {
    id: 'regex-word-boundary',
    pattern: '\\bword\\b',
    description: 'Wort-Grenze',
    example: 'word',
    matches: ['word in sentence'],
    difficulty: 'beginner',
  },
];

// JSON API Examples
export interface APIExample {
  id: string;
  title: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  endpoint: string;
  body?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const API_EXAMPLES: APIExample[] = [
  {
    id: 'api-get-users',
    title: 'GET Users',
    method: 'GET',
    endpoint: '/api/v1/users?page=1&limit=10',
    difficulty: 'beginner',
  },
  {
    id: 'api-get-user',
    title: 'GET User by ID',
    method: 'GET',
    endpoint: '/api/v1/users/123',
    difficulty: 'beginner',
  },
  {
    id: 'api-post-user',
    title: 'POST Create User',
    method: 'POST',
    endpoint: '/api/v1/users',
    body: `{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "developer"
}`,
    difficulty: 'beginner',
  },
  {
    id: 'api-put-user',
    title: 'PUT Update User',
    method: 'PUT',
    endpoint: '/api/v1/users/123',
    body: `{
  "name": "John Updated",
  "email": "john.updated@example.com",
  "role": "admin"
}`,
    difficulty: 'intermediate',
  },
  {
    id: 'api-patch-user',
    title: 'PATCH Partial Update',
    method: 'PATCH',
    endpoint: '/api/v1/users/123',
    body: `{
  "role": "admin"
}`,
    difficulty: 'intermediate',
  },
  {
    id: 'api-delete-user',
    title: 'DELETE User',
    method: 'DELETE',
    endpoint: '/api/v1/users/123',
    difficulty: 'beginner',
  },
  {
    id: 'api-nested',
    title: 'Nested JSON',
    method: 'POST',
    endpoint: '/api/v1/orders',
    body: `{
  "customer": {
    "id": 123,
    "name": "John Doe"
  },
  "items": [
    { "productId": 1, "quantity": 2, "price": 29.99 },
    { "productId": 2, "quantity": 1, "price": 49.99 }
  ],
  "shipping": {
    "address": "123 Main St",
    "city": "Berlin",
    "country": "Germany"
  },
  "total": 109.97
}`,
    difficulty: 'advanced',
  },
];

// Collect all snippets
export const ALL_CODE_SNIPPETS: CodeSnippet[] = [
  ...RUST_SNIPPETS,
  ...GO_SNIPPETS,
  ...SQL_SNIPPETS,
  ...CPP_SNIPPETS,
  ...DOCKER_SNIPPETS,
  ...HTML_CSS_SNIPPETS,
];

// Language configurations for syntax highlighting
export const LANGUAGE_CONFIGS: Record<
  string,
  {
    name: string;
    extension: string;
    keywords: string[];
    types: string[];
    builtins: string[];
  }
> = {
  rust: {
    name: 'Rust',
    extension: '.rs',
    keywords: [
      'fn',
      'let',
      'mut',
      'const',
      'if',
      'else',
      'match',
      'loop',
      'while',
      'for',
      'in',
      'return',
      'use',
      'mod',
      'pub',
      'struct',
      'enum',
      'impl',
      'trait',
      'where',
      'async',
      'await',
      'move',
      'self',
      'Self',
      'super',
      'crate',
      'dyn',
      'type',
      'as',
      'ref',
    ],
    types: [
      'i8',
      'i16',
      'i32',
      'i64',
      'i128',
      'isize',
      'u8',
      'u16',
      'u32',
      'u64',
      'u128',
      'usize',
      'f32',
      'f64',
      'bool',
      'char',
      'str',
      'String',
      'Vec',
      'Option',
      'Result',
      'Box',
      'Rc',
      'Arc',
      'Cell',
      'RefCell',
    ],
    builtins: [
      'println!',
      'print!',
      'format!',
      'vec!',
      'panic!',
      'assert!',
      'assert_eq!',
      'dbg!',
      'todo!',
      'unimplemented!',
    ],
  },
  go: {
    name: 'Go',
    extension: '.go',
    keywords: [
      'package',
      'import',
      'func',
      'var',
      'const',
      'type',
      'struct',
      'interface',
      'map',
      'chan',
      'go',
      'defer',
      'select',
      'case',
      'default',
      'if',
      'else',
      'for',
      'range',
      'switch',
      'return',
      'break',
      'continue',
      'fallthrough',
      'goto',
    ],
    types: [
      'int',
      'int8',
      'int16',
      'int32',
      'int64',
      'uint',
      'uint8',
      'uint16',
      'uint32',
      'uint64',
      'float32',
      'float64',
      'complex64',
      'complex128',
      'byte',
      'rune',
      'string',
      'bool',
      'error',
    ],
    builtins: [
      'make',
      'new',
      'len',
      'cap',
      'append',
      'copy',
      'delete',
      'close',
      'panic',
      'recover',
      'print',
      'println',
    ],
  },
  sql: {
    name: 'SQL',
    extension: '.sql',
    keywords: [
      'SELECT',
      'FROM',
      'WHERE',
      'JOIN',
      'INNER',
      'LEFT',
      'RIGHT',
      'OUTER',
      'ON',
      'AND',
      'OR',
      'NOT',
      'IN',
      'EXISTS',
      'BETWEEN',
      'LIKE',
      'IS',
      'NULL',
      'ORDER',
      'BY',
      'GROUP',
      'HAVING',
      'LIMIT',
      'OFFSET',
      'AS',
      'DISTINCT',
      'UNION',
      'ALL',
      'INSERT',
      'INTO',
      'VALUES',
      'UPDATE',
      'SET',
      'DELETE',
      'CREATE',
      'TABLE',
      'ALTER',
      'DROP',
      'INDEX',
      'PRIMARY',
      'KEY',
      'FOREIGN',
      'REFERENCES',
      'CASCADE',
      'WITH',
      'RECURSIVE',
      'OVER',
      'PARTITION',
      'WINDOW',
    ],
    types: [
      'INTEGER',
      'INT',
      'BIGINT',
      'SMALLINT',
      'DECIMAL',
      'NUMERIC',
      'FLOAT',
      'REAL',
      'DOUBLE',
      'VARCHAR',
      'CHAR',
      'TEXT',
      'DATE',
      'TIME',
      'TIMESTAMP',
      'BOOLEAN',
      'SERIAL',
      'JSON',
      'JSONB',
      'UUID',
      'ARRAY',
    ],
    builtins: [
      'COUNT',
      'SUM',
      'AVG',
      'MIN',
      'MAX',
      'COALESCE',
      'NULLIF',
      'CAST',
      'CASE',
      'WHEN',
      'THEN',
      'ELSE',
      'END',
      'NOW',
      'CURRENT_DATE',
      'CURRENT_TIMESTAMP',
      'DATE_TRUNC',
      'EXTRACT',
      'ROW_NUMBER',
      'RANK',
      'DENSE_RANK',
      'LAG',
      'LEAD',
      'FIRST_VALUE',
      'LAST_VALUE',
    ],
  },
  cpp: {
    name: 'C++',
    extension: '.cpp',
    keywords: [
      'class',
      'struct',
      'enum',
      'union',
      'template',
      'typename',
      'public',
      'private',
      'protected',
      'virtual',
      'override',
      'final',
      'static',
      'const',
      'constexpr',
      'mutable',
      'volatile',
      'inline',
      'extern',
      'namespace',
      'using',
      'typedef',
      'auto',
      'decltype',
      'sizeof',
      'alignof',
      'new',
      'delete',
      'this',
      'if',
      'else',
      'switch',
      'case',
      'default',
      'for',
      'while',
      'do',
      'break',
      'continue',
      'return',
      'try',
      'catch',
      'throw',
      'noexcept',
    ],
    types: [
      'int',
      'char',
      'short',
      'long',
      'float',
      'double',
      'bool',
      'void',
      'wchar_t',
      'char16_t',
      'char32_t',
      'size_t',
      'ptrdiff_t',
      'nullptr_t',
      'string',
      'vector',
      'map',
      'set',
      'list',
      'deque',
      'array',
      'unique_ptr',
      'shared_ptr',
      'weak_ptr',
    ],
    builtins: [
      'std',
      'cout',
      'cin',
      'endl',
      'cerr',
      'clog',
      'printf',
      'scanf',
      'malloc',
      'free',
      'memcpy',
      'memset',
      'strlen',
      'strcmp',
      'strcpy',
    ],
  },
  dockerfile: {
    name: 'Dockerfile',
    extension: 'Dockerfile',
    keywords: [
      'FROM',
      'AS',
      'RUN',
      'CMD',
      'ENTRYPOINT',
      'COPY',
      'ADD',
      'WORKDIR',
      'ENV',
      'ARG',
      'EXPOSE',
      'VOLUME',
      'USER',
      'LABEL',
      'HEALTHCHECK',
      'SHELL',
      'STOPSIGNAL',
      'ONBUILD',
    ],
    types: [],
    builtins: [],
  },
  yaml: {
    name: 'YAML',
    extension: '.yml',
    keywords: ['true', 'false', 'null', 'yes', 'no', 'on', 'off'],
    types: [],
    builtins: [],
  },
  html: {
    name: 'HTML',
    extension: '.html',
    keywords: [
      'DOCTYPE',
      'html',
      'head',
      'body',
      'title',
      'meta',
      'link',
      'script',
      'style',
      'div',
      'span',
      'p',
      'a',
      'img',
      'ul',
      'ol',
      'li',
      'table',
      'tr',
      'td',
      'th',
      'form',
      'input',
      'button',
      'label',
      'select',
      'option',
      'textarea',
      'header',
      'footer',
      'nav',
      'main',
      'section',
      'article',
      'aside',
    ],
    types: [],
    builtins: [],
  },
  css: {
    name: 'CSS',
    extension: '.css',
    keywords: ['@import', '@media', '@keyframes', '@font-face', '@supports', '@page', '@charset'],
    types: [
      'px',
      'em',
      'rem',
      '%',
      'vh',
      'vw',
      'vmin',
      'vmax',
      'fr',
      'ch',
      'ex',
      'deg',
      'rad',
      'turn',
      'ms',
      's',
    ],
    builtins: [
      'display',
      'position',
      'width',
      'height',
      'margin',
      'padding',
      'border',
      'background',
      'color',
      'font',
      'flex',
      'grid',
      'transform',
      'transition',
      'animation',
      'opacity',
      'z-index',
      'overflow',
      'cursor',
      'pointer-events',
    ],
  },
};
