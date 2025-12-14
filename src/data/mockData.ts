// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Project, BlogPost, Experience, Education } from '../types';

export const projects = [
  {
    id: 1,
    title: "FlowSync",
    category: "Backend",
    description: "Real-Time Collaborative Task Management Platform.\n'Where teams flow together'.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
    tech: ["React", "Socket.io", "Node.js", "Redis", "PostgreSQL"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/FlowSync",
    link: "https://flowsync.temitopeagbola.com",
    features: [
      "Real-time cursors and live updates",
      "Kanban and List views with drag-and-drop",
      "Team chat integration",
      "Dark mode support"
    ],
    challenges: "Synchronizing state across multiple clients in real-time with sub-50ms latency using WebSockets."
  },
  {
    id: 2,
    title: "MarketMind",
    category: "AI",
    description: "E-Commerce Recommendation Engine & Platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tech: ["Python", "FastAPI", "TensorFlow", "Next.js", "MongoDB"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/MarketMind",
    link: "https://marketmind.temitopeagbola.com",
    features: [
      "Collaborative filtering recommendation algorithm",
      "Real-time inventory tracking",
      "Personalized user dashboards",
      "Automated email marketing integration"
    ],
    challenges: "Designing a cold-start strategy for new users to still receive relevant product suggestions."
  },
  {
    id: 3,
    title: "PulseOps",
    category: "DevOps",
    description: "DevOps Monitoring & Incident Management System.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tech: ["Go", "Prometheus", "Grafana", "Docker", "Slack API"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/PulseOps",
    link: "https://pulseops.temitopeagbola.com",
    features: [
      "Real-time metric visualization",
      "Automated alert routing to Slack/PagerDuty",
      "Container health checks",
      "Log aggregation pipeline"
    ],
    challenges: "Ingesting high-volume log streams efficiently without creating bottlenecks in the reporting pipeline."
  },
  {
    id: 4,
    title: "CivicCircle",
    category: "AI",
    description: "AI-Powered Content Moderation & Social Platform.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
    tech: ["React Native", "OpenAI API", "Node.js", "Firebase"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/CivicCircle",
    link: "https://civiccircle.temitopeagbola.com",
    features: [
      "Automated toxicity detection",
      "Community governance voting tools",
      "User reputation system",
      "Cross-platform mobile support"
    ],
    challenges: "Fine-tuning the moderation model to understand context and nuance in community discussions."
  },
  {
    id: 5,
    title: "DevDash",
    category: "Web",
    description: "Personal Developer Portfolio & Analytics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    tech: ["Next.js", "GitHub API", "Tailwind CSS", "Recharts"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/DevDash",
    link: "https://devdash.temitopeagbola.com",
    features: [
      "GitHub contribution heatmaps",
      "Automatic blog fetching from dev.to",
      "SEO optimized portfolio templates",
      "Visitor analytics dashboard"
    ],
    challenges: "Handling GitHub API rate limits and caching data efficiently to ensure fast page loads."
  },
  {
    id: 6,
    title: "BudgetWise",
    category: "Mobile",
    description: "Smart Expense Tracker & Financial Insights.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
    tech: ["React Native", "Plaid API", "Firebase Auth", "Victory Charts"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/BudgetWise",
    link: "https://budgetwise.temitopeagbola.com",
    features: [
      "Bank account synchronization via Plaid",
      "Automatic transaction categorization",
      "Monthly budget forecasting",
      "Offline mode support"
    ],
    challenges: "Implementing secure encryption for sensitive financial data stored locally on the device."
  },
  {
    id: 7,
    title: "CodeSnip",
    category: "Web",
    description: "Developer Code Snippet Manager.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80",
    tech: ["React", "Supabase", "Monaco Editor", "Chakra UI"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/CodeSnip",
    link: "https://codesnip.temitopeagbola.com",
    features: [
      "Syntax highlighting for 50+ languages",
      "Shareable public links (Gist-like)",
      "VS Code style editor embedding",
      "Tag-based search system"
    ],
    challenges: "Integrating the heavy Monaco Editor (VS Code core) without impacting initial page load performance."
  },
  {
    id: 8,
    title: "MeetQueue",
    category: "Backend",
    description: "Meeting Room Booking & Management System.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Google Calendar API"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/MeetQueue",
    link: "https://meetqueue.temitopeagbola.com",
    features: [
      "Conflict-free booking logic",
      "Integration with Google/Outlook calendars",
      "Admin panel for room analytics",
      "Tablet-view for room displays"
    ],
    challenges: "Handling timezone conversions accurately across distributed teams and physical locations."
  },
  {
    id: 9,
    title: "FitTrack",
    category: "Mobile",
    description: "Workout & Health Progress Tracker.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
    tech: ["React Native", "HealthKit / Google Fit", "Redux", "Node.js"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/FitTrack",
    link: "https://fittrack.temitopeagbola.com",
    features: [
      "Step count and calorie integration",
      "Custom workout routine builder",
      "Progress photos timeline",
      "Social challenges with friends"
    ],
    challenges: "Synchronizing background health data reliably across different mobile OS versions."
  },
  {
    id: 10,
    title: "LinkVault",
    category: "Web",
    description: "Bookmark Manager with Smart Organization.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80",
    tech: ["React", "Chrome Extension API", "Node.js", "Elasticsearch"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/LinkVault",
    link: "https://linkvault.temitopeagbola.com",
    features: [
      "Full-text search of bookmarked content",
      "Automatic tagging using AI",
      "Browser extension integration",
      "Read-later offline mode"
    ],
    challenges: "Building a performant full-text search engine that indexes the content of bookmarked pages."
  },
  {
    id: 11,
    title: "TrenyConnect",
    category: "Mobile",
    description: "Realtime logistics app.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80",
    tech: ["React Native", "Google Maps API", "Socket.io", "Stripe"],
    // 👇 UPDATED: GitHub URL
    githubUrl: "https://github.com/Isaacpyo/TrenyConnect",
    link: "https://trenyconnect.temitopeagbola.com",
    features: [
      "Real-time driver tracking map",
      "QR code package scanning",
      "Digital proof of delivery",
      "Route optimization for drivers"
    ],
    challenges: "Managing state for intermittent network connections while drivers are on the move (Offline-first architecture)."
  },
  {
    id: 12,
    title: "ChainGuard",
    category: "Web3", // New category for this project
    description: "Real-time smart contract security & monitoring.\n'Real-time smart contract security.'",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
    tech: ["Solidity", "Node.js", "Kafka", "PostgreSQL", "Next.js"],
    // 👇 Standardized Links
    githubUrl: "https://github.com/Isaacpyo/ChainGuard",
    link: "https://chainguard.temitopeagbola.com",
    features: [
      "Mempool monitoring for pre-execution threat detection",
      "Automated circuit breakers (Pause/Rate Limits)",
      "Role-based access control & Timelocks",
      "Real-time anomaly detection dashboard"
    ],
    challenges: "Designing a low-latency detection engine capable of analyzing mempool transactions and triggering on-chain circuit breakers before malicious transactions are mined."
  }
];
  

// ... Keep existing experiences, education, and blogPosts
export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Vitalos Technologies",
    period: "2024 - Present",
    description: "I engineer Vitalos’ microservices, AI triage engine, and cloud infrastructure, ensuring secure, scalable, and real-time patient-provider interactions."
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "SOS Children's Villages Nigeria",
    period: "2020 - 2023",
    description: "Developed and managed full-stack web applications. Implemented CI/CD pipelines that reduced deployment lead time significantly."
  },
  {
    id: 3,
    role: "Web Developer ",
    company: "Centre for Socio-Legal Studies ",
    period: "2019 - 2020",
    description: "Built and maintained the organisation’s web presence, designed digital assets, and produced presentation materials using modern design and front-end tools."
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Electrical and Electronics Engineering",
    school: "Federal University of Technology, Minna",
    period: "2014",
    description: "B.Eng in Electrical and Electronics Engineering"
  }
];

// 👇 UPDATED BLOG POSTS (10 ITEMS)
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "build-collaborative-filtering-recommendation-system-python",
    title: "Build a Collaborative Filtering Recommendation System with Python",
    excerpt:
      "You don't need a PhD to build smart features. Learn how to implement a production-ready recommendation engine using Scikit-learn and Cosine Similarity.",
    date: "Aug 10, 2025",
    readTime: "8 min read",
    tags: ["AI", "Python", "Machine Learning", "Tutorial"],
    content: `
You don't need deep learning or massive GPUs to build useful recommendations. A simple **collaborative filtering** system in Python can power “Users who liked this also liked…” features for real products.

In this tutorial, we’ll build a basic but production-ready **collaborative filtering recommendation engine** using **Pandas** and **Scikit-learn**.

---

## What Is Collaborative Filtering?

Collaborative filtering is based on one idea:

> **Users who behave similarly will probably like similar items.**

Instead of analysing the content of a movie or product, we look at **user behaviour**:

- Which items they rated
- What they clicked or watched
- What they added to cart

We then use these patterns to recommend new items.

Two common variants:

- **User-based**: find users similar to a target user, recommend what they liked.
- **Item-based**: find items similar to the ones a user already likes.

In this post we’ll focus on **user-based collaborative filtering**.

---

## Step 1: Build a User–Item Matrix

We start from a simple ratings table:

\`\`\`
user_id | item_id | rating
--------+---------+-------
1       |   10    |   5
1       |   11    |   4
2       |   10    |   4
3       |   12    |   5
\`\`\`

We convert this into a **user–item matrix**:

\`\`\`
          item_10  item_11  item_12
user_1       5        4        0
user_2       4        0        0
user_3       0        0        5
\`\`\`

In Python:

\`\`\`python
import pandas as pd

def build_user_item_matrix(ratings: pd.DataFrame) -> pd.DataFrame:
    """
    ratings: DataFrame with columns [user_id, item_id, rating]
    """
    user_item = (
        ratings
        .pivot_table(
            index="user_id",
            columns="item_id",
            values="rating"
        )
        .fillna(0.0)
        .astype(float)
    )
    return user_item
\`\`\`

---

## Step 2: Compute User Similarity with Cosine Similarity

Each user row is a vector of ratings. We compare users using **cosine similarity**, which measures the angle between vectors.

- **1.0** → very similar
- **0.0** → no similarity

\`\`\`python
from sklearn.metrics.pairwise import cosine_similarity

def compute_user_similarity(user_item: pd.DataFrame) -> pd.DataFrame:
    matrix = user_item.values
    sim = cosine_similarity(matrix)
    return pd.DataFrame(sim, index=user_item.index, columns=user_item.index)
\`\`\`

This gives us a **user-to-user similarity matrix**.

---

## Step 3: Generate Recommendations

To recommend items for a target user:

1. Find the most similar users.
2. Look at items they rated highly.
3. Filter out items the target user has already seen.
4. Rank the remaining items by a weighted score.

\`\`\`python
import numpy as np
import pandas as pd

def recommend_items_for_user(
    user_id: int,
    user_item: pd.DataFrame,
    user_sim: pd.DataFrame,
    top_k_users: int = 5,
    top_n_items: int = 10,
) -> pd.Series:
    # 1. Get similar users (exclude self)
    similar_users = (
        user_sim.loc[user_id]
        .drop(labels=[user_id])
        .sort_values(ascending=False)
        .head(top_k_users)
    )

    # 2. Ratings from similar users
    neighbor_ratings = user_item.loc[similar_users.index]

    # 3. Weighted score for each item
    scores = neighbor_ratings.T.dot(similar_users)

    # 4. Remove already-rated items
    already_rated = user_item.loc[user_id]
    scores = scores[already_rated[already_rated > 0].index].dropna()

    # 5. Sort and return top N
    return scores.sort_values(ascending=False).head(top_n_items)
\`\`\`

---

## Step 4: Scaling and Production Tips

To make this work at scale:

- Store the matrix as a **sparse matrix** for many users/items.
- Precompute similarity offline (e.g. hourly) and cache it.
- Use a **minimum activity threshold** to ignore very cold users.
- Combine with business rules (e.g. exclude out-of-stock items).

---

## Where to Go Next

From here, you can:

- Switch from user-based to **item-based** similarity.
- Add **implicit feedback** (clicks, views, watch time) instead of ratings.
- Blend collaborative filtering with **content-based features** (category, price, tags).

This simple Python setup already delivers real value and is a great first step into **practical recommendation systems**.
    `
  },
  {
    id: 2,
    slug: "integrating-generative-ai-top-3-pre-trained-models-react",
    title: "Integrating Generative AI: Top 3 Pre-Trained Models for React Apps",
    excerpt: "Skip the training costs. A guide to integrating OpenAI, Hugging Face, and Google Vision APIs directly into your frontend workflow.",
    date: "May 15, 2025",
    readTime: "10 min read",
    tags: ["AI", "React", "OpenAI", "Web Dev"],
    content: `
You no longer need to train your own models to ship AI features. With the right APIs, your **React app** can use powerful models for text, images, and analysis in a few lines of code.

In this guide, we’ll look at three **pre-trained AI services** that plug neatly into a React workflow:

- **OpenAI** – chat, text, and reasoning
- **Hugging Face Inference API** – task-specific NLP
- **Google Vision** – image understanding and OCR

---

## Architecture Overview

A safe, production-ready React + AI setup usually looks like this:

\`\`\`
React UI  →  Your Backend  →  AI Provider API
\`\`\`

The backend hides your API keys and enforces limits, while the frontend only talks to **your own endpoints**.

---

## 1. OpenAI: Chatbots and Text Generation

OpenAI models are ideal for:

- Chat-style assistants
- Summaries and explanations
- Content and email drafts
- Simple reasoning tasks

### Backend Example (Next.js API Route)

\`\`\`ts
// /api/openai.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { result: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = JSON.parse(req.body || "{}");

  if (!prompt) {
    return res.status(400).json({ result: "Prompt is required." });
  }

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OPENAI_API_KEY,
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await openaiRes.json();
  const content =
    data?.choices?.[0]?.message?.content ?? "No response from the model.";

  return res.status(200).json({ result: content });
}
\`\`\`

### React Component

\`\`\`tsx
import { useState } from "react";

export function AiPromptBox() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    const res = await fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setAnswer(data.result);
    setLoading(false);
  };

  return (
    <div className="space-y-3">
      <textarea
        className="w-full rounded border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100"
        rows={3}
        placeholder="Ask the AI something..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400 disabled:opacity-60"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>
      {answer && (
        <div className="rounded-md border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100">
          {answer}
        </div>
      )}
    </div>
  );
}
\`\`\`

---

## 2. Hugging Face Inference API: Sentiment, Classification, and More

Hugging Face exposes many ready-made models for:

- Sentiment analysis
- Translation
- Text classification
- Named entity recognition

A simple backend call:

\`\`\`ts
// /api/sentiment.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text } = JSON.parse(req.body || "{}");

  const hfRes = await fetch(
    "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.HF_API_KEY,
      },
      body: JSON.stringify({ inputs: text }),
    }
  );

  const data = await hfRes.json();
  return res.status(200).json(data);
}
\`\`\`

You can then display the sentiment label and score in your React UI.

---

## 3. Google Vision: Image Intelligence for Upload Flows

Google Vision handles:

- Text extraction (OCR)
- Label detection
- Object and logo detection
- Basic safety checks

Typical flow:

\`\`\`
React file input → Backend upload handler → Vision API → Labels / text → React UI
\`\`\`

This is perfect for:

- Scanning receipts or documents
- Auto-tagging uploaded images
- Validating product photos

---

## Which Provider Should You Use?

- **OpenAI** – chat, writing, reasoning  
- **Hugging Face** – sentiment and classic NLP tasks  
- **Google Vision** – image uploads and OCR  

By hiding all calls behind your backend and using components like \`AiPromptBox\`, you can add powerful AI to your React apps **without ever training a model yourself**.
    `
  },
  {
    id: 3,
    slug: "modern-etl-pipelines-architecting-data-flows-ai-analytics",
    title: "Modern ETL Pipelines: Architecting Data Flows for AI & Analytics",
    excerpt:
      "From chaos to clarity. How to design robust ETL pipelines using Python and Airflow to keep your ML models fed with fresh data.",
    date: "Feb 28, 2025",
    readTime: "9 min read",
    tags: ["Data Engineering", "ETL", "Python", "Architecture"],
    content: `
Most machine learning projects fail not because of models, but because the **data pipelines** behind them are fragile or outdated. A solid ETL (Extract–Transform–Load) pipeline is the backbone of reliable AI and analytics.

In this article, we’ll design a **modern ETL pipeline** using **Python** and **Apache Airflow**.

---

## High-Level ETL Architecture

\`\`\`
        +----------+
        | Sources  |
        | (APIs,  |
        |  DBs)   |
        +----+----+
             |
          Extract
             |
        +----v----+
        |   Raw   |
        | Storage |
        +----+----+
             |
         Transform
             |
        +----v----+
        | Cleaned |
        |  Data   |
        +----+----+
             |
           Load
             |
        +----v----+
        | Warehouse|
        +----------+
\`\`\`

- **Sources**: databases, CSVs, APIs, logs  
- **Raw storage**: S3, GCS, or a raw schema in your warehouse  
- **Transform**: cleaning, joining, feature engineering  
- **Warehouse**: Postgres, BigQuery, Snowflake  
- **Consumers**: dashboards and ML models

---

## Extract: Pulling Data with Python

\`\`\`python
import requests
import pandas as pd
from pathlib import Path

RAW_DIR = Path("/data/raw")

def extract_users() -> str:
    url = "https://api.example.com/users"
    response = requests.get(url, timeout=10)
    response.raise_for_status()

    data = response.json()
    df = pd.DataFrame(data)

    RAW_DIR.mkdir(parents=True, exist_ok=True)
    out_path = RAW_DIR / "users.json"
    df.to_json(out_path, orient="records", lines=True)

    return str(out_path)
\`\`\`

Key tips:

- Always **log** where files are stored.
- Keep raw data unchanged so you can replay transformations later.

---

## Transform: Cleaning and Structuring Data

\`\`\`python
import pandas as pd
from pathlib import Path

PROCESSED_DIR = Path("/data/processed")

def transform_users(raw_path: str) -> str:
    df = pd.read_json(raw_path, lines=True)

    # Basic cleaning
    df = df.drop_duplicates(subset=["id"])
    df["signup_date"] = pd.to_datetime(df["signup_date"])

    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    out_path = PROCESSED_DIR / "dim_users.parquet"
    df.to_parquet(out_path, index=False)

    return str(out_path)
\`\`\`

---

## Load: Writing to a Warehouse

\`\`\`python
import pandas as pd
from sqlalchemy import create_engine

def load_users_parquet(parquet_path: str) -> None:
    df = pd.read_parquet(parquet_path)
    engine = create_engine("postgresql://user:pass@host:5432/analytics")

    df.to_sql("dim_users", engine, if_exists="replace", index=False)
\`\`\`

---

## Orchestrating ETL with Airflow

Airflow lets you define ETL as a **DAG (Directed Acyclic Graph)** of tasks.

\`\`\`python
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

from my_etl import extract_users, transform_users, load_users_parquet

with DAG(
    dag_id="users_etl",
    start_date=datetime(2025, 1, 1),
    schedule_interval="@daily",
    catchup=False,
    tags=["etl", "users"],
) as dag:
    extract_task = PythonOperator(
        task_id="extract_users",
        python_callable=extract_users,
    )

    transform_task = PythonOperator(
        task_id="transform_users",
        python_callable=transform_users,
        op_args=[ "{{ ti.xcom_pull('extract_users') }}" ],
    )

    load_task = PythonOperator(
        task_id="load_users",
        python_callable=load_users_parquet,
        op_args=[ "{{ ti.xcom_pull('transform_users') }}" ],
    )

    extract_task >> transform_task >> load_task
\`\`\`

You now have a scheduled daily pipeline that moves data from an API into your analytics database.

---

## Why This Matters for AI

Good ETL pipelines give your AI:

- **Fresh data** for retraining and monitoring  
- **Consistent features** to prevent weird model behaviour  
- **Traceability** when something goes wrong  

Investing in a clean ETL architecture often provides more value than tuning the next model hyperparameter.
    `
  },
  {
    id: 4,
    slug: "rest-vs-graphql-2025-performance-caching",
    title: "REST vs GraphQL in 2025: Performance, Caching, and When to Switch",
    excerpt:
      "The debate is settled. A practical comparison of Over-fetching vs Caching strategies to help you choose the right API architecture.",
    date: "Nov 05, 2024",
    readTime: "10 min read",
    tags: ["API", "GraphQL", "Performance", "System Design"],
    content: `
REST and GraphQL are no longer “new vs old”. In 2025, most teams mix both, choosing the right tool for each part of the system.

This article compares **REST vs GraphQL** with a focus on **performance, caching, and real-world trade-offs**.

---

## Quick Mental Model

\`\`\`
REST    → Many endpoints, each fixed
GraphQL → One endpoint, flexible queries
\`\`\`

- REST: great for **simple, resource-based APIs**.
- GraphQL: great for **complex UIs and data graphs**.

---

## REST: Simple, Stable, Easy to Cache

REST exposes endpoints like:

\`\`\`
GET /api/users/42
GET /api/users/42/orders
\`\`\`

### Strengths

- Works perfectly with **HTTP caching** and CDNs.
- Easy to inspect: URL + method tell you almost everything.
- Great for public APIs and microservices.

### Performance Diagram

\`\`\`
Client → GET /api/users/42           (1 request)
Client → GET /api/users/42/orders    (2nd request)
\`\`\`

You might need **multiple calls** to build one page, but each is cacheable.

---

## GraphQL: Flexible Query Language for the Frontend

GraphQL has a single endpoint (for example \`/graphql\`) and lets the client request exactly what it needs.

\`\`\`graphql
query UserWithOrders {
  user(id: "42") {
    id
    name
    email
    orders(limit: 5) {
      id
      total
      createdAt
    }
  }
}
\`\`\`

### Strengths

- Avoids **over-fetching** (getting unused fields).
- Avoids **under-fetching** (needing extra requests).
- Frontend teams iterate faster by adjusting queries, not endpoints.

### Performance Diagram

\`\`\`
Client → POST /graphql (one request, all data)
\`\`\`

---

## Caching Differences

**REST caching:**

- URL is the cache key: \`/api/users/42\`
- Easy to cache with CDNs and reverse proxies.
- Great for static or rarely changing data.

**GraphQL caching:**

- Harder to cache by URL alone (same endpoint, different queries).
- Requires **schema-aware caching** or persisted queries.
- Often cached at the **field** or **resolver** level in the server.

If your system relies heavily on **aggressive HTTP caching**, REST has an advantage.

---

## When REST Is the Better Choice

Choose REST when:

- Your endpoints map cleanly to resources (users, orders, products).
- You want simple, stable URLs.
- You heavily use CDN caching.
- Your clients are simple (IoT, scripts, partner integrations).

---

## When GraphQL Shines

Choose GraphQL when:

- Your frontend needs many nested resources on each screen.
- You’re building complex dashboards or admin tools.
- You want strongly typed schemas and introspection.
- You aggregate data from multiple backend services into one graph.

GraphQL is especially powerful as a **backend-for-frontend (BFF)** layer.

---

## Hybrid Strategy

Many modern systems use both:

- **REST** for core internal services and simple integrations.
- **GraphQL** as a gateway that composes multiple REST/microservice calls into one query for clients.

The winner is not REST or GraphQL, but the architecture that best matches your **performance, caching, and developer experience** needs.
    `
  },
  {
    id: 5,
    slug: "ci-cd-beginners-deploy-production-github-actions",
    title: "CI/CD for Beginners: Deploy to Production with GitHub Actions",
    excerpt: "Stop deploying manually. Build your first automated testing and deployment pipeline in 10 minutes with zero prior DevOps experience.",
    date: "Aug 18, 2024",
    readTime: "7 min read",
    tags: ["CI/CD", "DevOps", "GitHub Actions", "Automation"],
    content: `
Manual deploys are stressful, slow, and easy to mess up. With **CI/CD** and **GitHub Actions**, you can automatically test and deploy every push to your main branch.

This guide walks you through a simple, beginner-friendly CI/CD setup.

---

## What Is CI/CD?

**Continuous Integration (CI)**

- Automatically runs tests and checks when you push code.
- Catches bugs early.

**Continuous Deployment (CD)**

- Automatically deploys code that passes CI.
- Keeps environments up to date.

High-level flow:

\`\`\`
git push → GitHub → CI (build + test) → CD (deploy)
\`\`\`

---

## Step 1: Create a CI Workflow

Create a file at:

\`\`\`
.github/workflows/ci.yml
\`\`\`

Example for a Node.js project:

\`\`\`yaml
name: CI

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
\`\`\`

Now, every push or PR to \`main\` will automatically run your tests.

---

## Step 2: Add a Simple Deployment Step

If you deploy to a platform like Render, Railway, or a custom server, you can:

- Build artifacts (for example \`npm run build\`).
- Trigger a deployment script or call a deploy API.

Simple example showing a second job (pseudo-deploy):

\`\`\`yaml
deploy:
  needs: build-and-test
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'

  steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Deploy (placeholder)
      run: echo "Run your deploy script here"
\`\`\`

You would replace the last step with your real command, such as:

- A CLI (\`vercel --prod\`)
- An SSH script
- A call to a deployment API

---

## Step 3: Store Secrets Securely

Never hardcode tokens in workflows. Instead:

1. Go to **GitHub repo → Settings → Secrets and variables → Actions**.
2. Add entries like \`DEPLOY_API_TOKEN\`.
3. Reference them in YAML:

\`\`\`yaml
env:
  DEPLOY_API_TOKEN: \${{ secrets.DEPLOY_API_TOKEN }}
\`\`\`

---

## Benefits You Get Immediately

- No more “works on my machine” deployments.
- Automatic checks on every push.
- A clear history of deploys and build results.
- Confidence to ship more often.

Once you get used to CI/CD, manual deploys will feel like the stone age.
    `
  },
  {
    id: 6,
    slug: "api-versioning-strategies-uri-vs-header",
    title: "API Versioning Strategies: URI vs Header Best Practices",
    excerpt:
      "Don't break your client apps. Learn the pros and cons of URI versioning vs Content Negotiation to manage breaking changes gracefully.",
    date: "Jun 22, 2024",
    readTime: "8 min read",
    tags: ["API", "Backend", "Best Practices"],
    content: `
As your API evolves, you will eventually need to make **breaking changes**. Without a versioning strategy, those changes can break mobile apps, dashboards, and integrations.

In this guide we’ll compare two common strategies:

- **URI versioning**
- **Header-based versioning (content negotiation)**

---

## Why Versioning Matters

Reasons to introduce a new version:

- Remove or rename fields
- Change response shapes
- Tighten validation rules
- Introduce new security requirements

A versioning strategy lets you **ship improvements** without breaking existing clients.

---

## Strategy 1: URI Versioning

Pattern:

\`\`\`
GET /api/v1/users/123
GET /api/v2/users/123
\`\`\`

### Pros

- Very easy to understand.
- Simple to route and document.
- Works well with API gateways and proxies.
- Great for public APIs or partner integrations.

### Cons

- URL space becomes cluttered with multiple versions.
- Might duplicate similar handlers across versions.

**Use URI versioning when simplicity and clarity are top priorities.**

---

## Strategy 2: Header-Based Versioning

Pattern:

\`\`\`
GET /api/users/123
Accept: application/vnd.myapp.v2+json
\`\`\`

or

\`\`\`
GET /api/users/123
X-API-Version: 2
\`\`\`

### Pros

- Clean, stable URLs.
- Flexible for complex or long-lived APIs.
- Allows fine-grained version negotiation.

### Cons

- Harder to debug by looking at URLs alone.
- Requires better tooling and documentation.
- Some clients need extra configuration to set headers correctly.

**Use header versioning when you control both client and server and expect many active versions.**

---

## Decision Cheat Sheet

- **Public API, SDKs, mobile clients** → URI versioning
- **Large internal platform, many teams, many versions** → Header versioning
- **Hybrid** → Sometimes both (for example major version in URI, minor in header)

---

## Practical Best Practices

- Avoid supporting too many major versions at once.
- Communicate deprecation timelines clearly.
- Maintain a **changelog** and migration guides.
- Add monitoring for which versions are still used.

Good versioning is about trust: clients should feel safe upgrading without nasty surprises.
    `
  },
  {
    id: 7,
    slug: "5-critical-database-design-mistakes-scaling-startups",
    title: "5 Critical Database Design Mistakes Scaling Startups Make",
    excerpt:
      "Avoid common pitfalls like missing indexes on foreign keys and poor JSON normalization that will slow down your application as it scales.",
    date: "Apr 10, 2024",
    readTime: "6 min read",
    tags: ["Database", "SQL", "Scalability", "PostgreSQL"],
    content: `
Early database decisions often feel “good enough”, until the product starts to grow and queries suddenly become slow or unreliable. Many scaling startups hit the same database pitfalls.

Here are **5 common mistakes** and how to avoid them.

---

## 1. Missing Indexes on Foreign Keys

If you frequently join tables, missing indexes will kill performance.

Example:

\`\`\`sql
SELECT *
FROM orders o
JOIN users u ON u.id = o.user_id
WHERE u.id = 123;
\`\`\`

If \`orders.user_id\` is not indexed, the database may scan the entire orders table.

**Fix:** index foreign keys you join on:

\`\`\`sql
CREATE INDEX idx_orders_user_id ON orders (user_id);
\`\`\`

---

## 2. Overusing JSON for Structured Data

PostgreSQL and other databases support JSON columns, which is tempting:

\`\`\`sql
ALTER TABLE users ADD COLUMN profile JSONB;
\`\`\`

Stuffing everything into \`profile\` makes querying harder:

- Filters become slow and verbose.
- Indexing is more complex.
- Data validation is weaker.

**Guideline:** use JSON for **truly flexible or rare fields**. Put common, query-heavy fields into normal columns.

---

## 3. Skipping Foreign Key Constraints

Some teams avoid foreign keys for “performance reasons”. In reality, this often leads to:

- Orphaned rows
- Inconsistent references
- Surprise null values

**Fix:** use foreign keys in your core tables.

\`\`\`sql
ALTER TABLE orders
ADD CONSTRAINT fk_orders_users
FOREIGN KEY (user_id) REFERENCES users(id);
\`\`\`

They act as a guardrail for your data.

---

## 4. No Partitioning for Huge Tables

As tables grow into tens or hundreds of millions of rows, queries slow down.

Partitioning splits a big table into smaller pieces, often by date:

\`\`\`
orders_2024_01
orders_2024_02
orders_2024_03
...
\`\`\`

Queries can then target only recent partitions.

**Rule of thumb:** consider partitioning when your core event or log tables grow very large and most queries focus on recent data.

---

## 5. No Migration or Backup Strategy

Symptoms:

- Schema changes made manually in production.
- No record of what changed or when.
- No tested backup and restore process.

**Solutions:**

- Use migration tools (Flyway, Liquibase, or your ORM migrations).
- Run migrations as part of CI/CD.
- Schedule automated backups.
- Test restoring from backups regularly.

---

Avoiding these mistakes early makes your database fast, predictable, and much cheaper to maintain as your startup scales.
    `
  },
  {
    id: 8,
    slug: "docker-compose-guide-setup-full-stack-dev-environment",
    title: "Docker Compose Guide: Setup a Full-Stack Dev Environment in 5 Mins",
    excerpt:
      "Kill the 'it works on my machine' bug. How to orchestrate your App, Database, and Redis using a single configuration file.",
    date: "Feb 15, 2024",
    readTime: "5 min read",
    tags: ["DevOps", "Docker", "DX", "Tutorial"],
    content: `
Running your app, database, and cache manually on every machine is painful. **Docker Compose** solves this by defining your entire dev environment in a single file.

In this guide, we’ll spin up a simple full-stack environment with:

- A web app
- PostgreSQL
- Redis

---

## High-Level Layout

\`\`\`
+-----------+      +-----------+      +--------+
|   app     | <--> |  postgres | <--> | redis  |
+-----------+      +-----------+      +--------+
\`\`\`

Each service runs in its own container but is wired together by Docker Compose.

---

## Step 1: Basic docker-compose.yml

Create a file named \`docker-compose.yml\` in your project root:

\`\`\`yaml
version: "3.9"

services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - db
      - redis

  db:
    image: postgres:16
    environment:
      POSTGRES_USER: app_user
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: app_db
    ports:
      - "5432:5432"

  redis:
    image: redis:7
    ports:
      - "6379:6379"
\`\`\`

- \`app\` is built from your local Dockerfile.
- \`db\` and \`redis\` use official images.
- \`depends_on\` ensures the database and cache start before the app.

---

## Step 2: Dockerfile for the App

Example Node.js Dockerfile:

\`\`\`dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev"]
\`\`\`

In development you might mount the source directory as a volume for live reload, but this minimal example works out of the box.

---

## Step 3: Start the Stack

From your project root:

\`\`\`bash
docker compose up
\`\`\`

All three services will start:

- App at \`http://localhost:3000\`
- Postgres at \`localhost:5432\`
- Redis at \`localhost:6379\`

Stop them with:

\`\`\`bash
docker compose down
\`\`\`

---

## Why This Improves Developer Experience

- New developers run **one command** instead of configuring databases manually.
- Everyone shares the **same versions** of Postgres and Redis.
- You can recreate a clean environment in seconds.

Docker Compose is a small investment that pays off every day you work on the project.
    `
  },
  {
    id: 9,
    slug: "mastering-environment-variables-security-guide-node-js",
    title: "Mastering Environment Variables: A Security Guide for Node.js",
    excerpt:
      "Stop hardcoding credentials. Learn how to manage configuration across Development, Staging, and Production environments safely.",
    date: "Dec 12, 2023",
    readTime: "8 min read",
    tags: ["Security", "Node.js", "Configuration"],
    content: `
Environment variables are one of the simplest ways to keep secrets and configuration **out of your code** and make your Node.js app safe and flexible.

This guide shows how to use them properly across development, staging, and production.

---

## Why Hardcoding Secrets Is Dangerous

Bad pattern:

\`\`\`js
const DB_PASSWORD = "super-secret-password";
\`\`\`

If this file is ever shared or pushed to a public repo, your database is at risk. Fixing it means rotating credentials and redeploying.

Environment variables solve this by moving secrets into the environment, not the source code.

---

## Using dotenv in Node.js

Install:

\`\`\`bash
npm install dotenv
\`\`\`

Create a \`.env\` file:

\`\`\`
DATABASE_URL=postgres://app:password@localhost:5432/app_db
JWT_SECRET=replace-me
NODE_ENV=development
\`\`\`

Load them at the start of your app:

\`\`\`js
import "dotenv/config";

console.log("Env:", process.env.NODE_ENV);
\`\`\`

Or using CommonJS:

\`\`\`js
require("dotenv").config();
\`\`\`

Now you can safely read:

\`\`\`js
const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;
\`\`\`

---

## Validate Required Variables

Fail fast if something important is missing:

\`\`\`js
const required = ["DATABASE_URL", "JWT_SECRET"];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error("Missing required env var: " + key);
  }
}
\`\`\`

This prevents deploying with half-configured environments.

---

## Different Environments, Different Values

You might have:

- \`.env.development\`
- \`.env.staging\`
- \`.env.production\`

Your process manager (Docker, hosting provider, CI/CD pipeline) sets the correct variables for each environment.

In production, prefer:

- Platform environment variables (Render, Railway, AWS, etc.)
- Secret managers (AWS Secrets Manager, GCP Secret Manager, Vault)

Avoid storing real production secrets in plain files.

---

## Best Practices Recap

- Never commit \`.env\` files to Git.
- Add a \`.env.example\` with placeholder values for your team.
- Validate required variables on startup.
- Rotate sensitive keys periodically.

Handled well, environment variables give your Node.js app **stronger security** and **easier configuration** with almost no extra code.
    `
  },
  {
    id: 10,
    slug: "advanced-sql-data-analysis-5-queries-developer-needs",
    title: "Advanced SQL for Data Analysis: 5 Queries Every Developer Needs",
    excerpt:
      "Move beyond SELECT *. Master Window Functions, CTEs, and Aggregations to extract meaningful insights directly from your database.",
    date: "Oct 01, 2023",
    readTime: "7 min read",
    tags: ["SQL", "Data Analysis", "Database"],
    content: `
Most developers know basic SQL, but a few extra query patterns can turn you into a **data analysis powerhouse**. With the right tools, you can answer many business questions directly from the database.

Here are **5 SQL techniques** you should know.

---

## 1. Window Functions for Running Totals and Rankings

Example: running total of revenue over time.

\`\`\`sql
SELECT
  order_date,
  amount,
  SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders
ORDER BY order_date;
\`\`\`

Window functions let you compute metrics across rows **without collapsing them** into a single group.

---

## 2. Common Table Expressions (CTEs) for Readable Pipelines

CTEs let you build queries step by step.

\`\`\`sql
WITH completed_orders AS (
  SELECT *
  FROM orders
  WHERE status = 'completed'
),
spend_by_user AS (
  SELECT
    user_id,
    SUM(total) AS total_spend
  FROM completed_orders
  GROUP BY user_id
)
SELECT *
FROM spend_by_user
WHERE total_spend > 1000;
\`\`\`

Think of each CTE as a named temporary result.

---

## 3. Aggregations for Quick Insights

Classic reporting pattern:

\`\`\`sql
SELECT
  country,
  COUNT(*) AS users_count,
  AVG(monthly_spend) AS avg_spend
FROM users
GROUP BY country
ORDER BY users_count DESC;
\`\`\`

Use \`COUNT\`, \`SUM\`, \`AVG\`, \`MIN\`, and \`MAX\` to summarise large datasets quickly.

---

## 4. Joins to Combine Data Sources

Joins connect related tables and unlock richer views.

\`\`\`sql
SELECT
  u.id,
  u.email,
  SUM(o.total) AS total_spend
FROM users u
JOIN orders o
  ON o.user_id = u.id
WHERE o.status = 'completed'
GROUP BY u.id, u.email
ORDER BY total_spend DESC;
\`\`\`

Understanding inner vs left joins is essential for accurate analytics.

---

## 5. Subqueries for Flexible Filtering

Use subqueries when you need to filter based on aggregate results.

\`\`\`sql
SELECT *
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
  GROUP BY user_id
  HAVING COUNT(*) >= 5
);
\`\`\`

This finds all users with at least 5 orders.

---

Mastering these patterns lets you answer complex questions **without exporting to spreadsheets or writing extra backend code**. SQL remains one of the cleanest ways to reason about data at scale.
    `
  }
];

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  // storing icon as string name or component won't work easily in JSON/pure data files 
  // without some mapping, but since this is a .ts file, JSX is fine if we import React.
  // For simplicity in this file, we will keep the structure but we might need to handle icons 
  // slightly differently if strict typing is an issue. 
  // For now, I will export the array directly as you had it.
  summary: string;
  tags: string[];
  fullContent: {
    challenge: string;
    solution: string;
    architecture: string[];
    results: string[];
  };
}

// ... (imports and other exports remain the same)

export const caseStudies = [
  {
    id: "treny",
    title: "Treny Logistics",
    subtitle: "Architecture + AI Route Optimization",
    summary: "A scalable logistics platform processing 50k+ daily shipments with an AI-driven routing engine that reduced delivery times by 22%.",
    tags: ["Microservices", "Python/TensorFlow", "PostgreSQL", "Redis"],
    fullContent: {
      challenge: `
The legacy logistics workflow was built on a single monolithic system and a lot of manual decision-making. During peak seasons, dispatchers had to juggle spreadsheets, phone calls, and driver WhatsApp groups just to get orders out of the door.

This led to three core problems:
- Routes were planned manually and could not react to real-time traffic, weather, or failed deliveries.
- A single database and process queue became a bottleneck whenever volume spiked.
- Operations teams had almost no visibility into where drivers were at any point in time.

High-level view of the legacy flow:

  Online Orders + Store Orders
              │
              ▼
       [ Legacy Monolith ]
              │
              ▼
    Manual Route Planning (Excel)
              │
              ▼
         Driver Apps / Calls

To support Treny’s growth across multiple UK cities and cross-border routes, we needed an architecture that could scale horizontally and make **smart routing decisions automatically**.`,
      solution: `
We decomposed the monolith into a set of domain-driven microservices and introduced an AI-powered routing engine that continuously optimises delivery plans based on live data.

The new flow:

  Orders Ingest  ──►  Order Service
                         │
                         ▼
                  Event Bus (RabbitMQ)
                         │
        ┌────────────────┴─────────────────┐
        ▼                                  ▼
  Routing Engine (AI)              Tracking Service
        │                                  │
        ▼                                  ▼
  Optimised Routes  ──►  Driver App   Live Telemetry (Redis Geo)

Key steps in the solution:

- Split the monolith into focused services for **Order Management**, **Dispatch**, and **Tracking**, each with its own database schema.
- Trained a **TensorFlow model** on historical delivery data (volume, location, time of day, traffic patterns) to recommend optimal routes and delivery windows.
- Used **Redis Geospatial** to store driver locations and perform fast “nearest driver” queries in real time.
- Built operational dashboards so dispatchers can see route health, SLAs and exception alerts at a glance.

The result is a system that behaves more like a smart control tower than a collection of spreadsheets.`,
      architecture: [
        "Event-Driven Architecture using RabbitMQ for async communication between Order, Dispatch, and Tracking services.",
        "Hybrid database strategy: PostgreSQL for transactional data (orders, customers, SLAs) and MongoDB for unstructured delivery logs and driver telemetry history.",
        "TensorFlow model (Python) for route scoring and ETA prediction, served via FastAPI behind an internal API gateway.",
        "Redis Geospatial indexes for real-time driver location queries and proximity searches when assigning new drops.",
        "Centralised observability stack (Prometheus + Grafana + Loki) for per-route latency, failed deliveries, and model performance monitoring."
      ],
      results: [
        "22% reduction in average delivery time across core routes within the first 3 months.",
        "15% decrease in fuel costs due to better route consolidation and fewer back-and-forth trips.",
        "40% reduction in manual dispatch interventions during peak trading days (Black Friday, Christmas).",
        "99.99% system uptime during peak loads after moving critical flows off the monolith and onto independent services.",
        "Improved customer satisfaction scores (CSAT) by 18 points due to more reliable delivery windows and live parcel tracking."
      ]
    }
  },
  {
    id: "vitalos",
    title: "Vitalos Mental Health",
    subtitle: "Microservices + AI-Powered Triage",
    summary: "A secure digital mental health platform connecting patients with clinicians, featuring an AI-assisted triage workflow to surface high-risk cases quickly.",
    tags: ["Node.js", "NLP", "WebRTC", "Kubernetes"],
    fullContent: {
      challenge: `
Mental health services were facing long wait times for initial assessments. Patients completed long intake forms and sent messages, but clinicians had to manually review everything before deciding who to prioritise. This created two major risks:

- High-risk individuals could wait in the same queue as routine cases.
- Clinicians spent too much time triaging, not treating.

Constraints made the problem harder:
- Sensitive health data (PHI) required strict security and compliance.
- The platform needed to support **real-time video sessions** as well as asynchronous chat.
- Any AI assistance had to be **human-in-the-loop**, explainable and auditable.

Existing flow (simplified):

  Patient Intake Form / Messages
              │
              ▼
     Shared Inbox for Clinicians
              │
              ▼
    Manual Review + Prioritisation

At scale, this model simply didn’t work.`,
      solution: `
We designed a microservices-based platform where **AI supports, but does not replace, clinicians**. The core idea: use NLP to pre-triage cases, highlight risk factors, and give clinicians a ranked queue with context.

New high-level flow:

  Patient Forms + Chat Logs
              │
              ▼
      Triage Ingestion Service
              │
              ▼
      NLP Risk Scoring Service
              │
              ▼
  Prioritised Queue for Clinicians
              │
      ┌───────┴────────┐
      ▼                ▼
  Video Consults   Async Follow-up

Key elements of the solution:

- Built a secure **WebRTC** video service with end-to-end encryption for live sessions.
- Implemented an **NLP triage service** (fine-tuned transformer/BERT-style model) that scans intake forms and chat messages for high-risk signals (self-harm intent, severe distress, etc.).
- Designed clear **risk bands** (Low / Medium / High / Critical) and surfaced those bands in the clinician UI with supporting evidence snippets.
- Wrapped the entire platform in strict access control, audit logging, and environment isolation to align with healthcare data protection expectations.

Clinicians still make final decisions, but they start each day with a queue that is already ordered by urgency instead of arrival time.`,
      architecture: [
        "Microservices architecture built with Node.js/TypeScript for API services (Auth, Patients, Sessions, Triage, Messaging).",
        "WebRTC-based video service with TURN/STUN servers and E2EE media channels for patient-clinician calls.",
        "NLP triage service using a fine-tuned transformer model hosted on GPU-enabled nodes, accessed via internal gRPC/HTTP APIs.",
        "Kubernetes deployment with isolated namespaces for staging vs production and strict network policies for PHI-handling services.",
        "Centralised audit log pipeline (Kafka + Elasticsearch) recording all access to sensitive records for compliance and incident response.",
        "Feature flags for enabling/disabling AI assistance per clinic or cohort, allowing gradual rollout and A/B experimentation."
      ],
      results: [
        "Reduced average triage time from ~4 hours to under 10 minutes for high-risk submissions.",
        "Clinicians reported a 30–40% reduction in time spent on manual case review, freeing more hours for direct patient care.",
        "Zero major security incidents, supported by end-to-end encryption, strict RBAC and comprehensive audit logging.",
        "Successfully handled a 10x increase in active users and sessions during peak periods without downtime.",
        "Improved escalation accuracy: >90% of critical-risk cases were picked up in the first review cycle, compared to ~55% before."
      ]
    }
  },
  {
    id: "devops-pipeline",
    title: "Enterprise DevOps Pipeline",
    subtitle: "ArgoCD + Kubernetes Automation",
    summary: "Modernising deployment workflows for a fintech scale-up by moving from manual, script-based releases to a GitOps-driven pipeline with ArgoCD and Terraform.",
    tags: ["ArgoCD", "Terraform", "GitHub Actions", "Prometheus"],
    fullContent: {
      challenge: `
The engineering team was shipping multiple services, but deployments were manual and fragile. Releases looked like this:

  Developer merges to main
          │
          ▼
  Ops pulls latest code
          │
          ▼
  Shell scripts + ad-hoc kubectl
          │
          ▼
  Hope nothing breaks in production

Key pain points:

- Deployments took up to **45 minutes per service**, often done late at night to avoid user impact.
- Rollbacks required manually re-running old scripts or restoring from backups, which was error-prone.
- No single source of truth for infrastructure; cluster state drifted from what lived in various Terraform folders and wiki pages.
- Limited visibility into which version of each service was currently running in which environment.

For a fintech product handling payments and sensitive data, this level of operational risk was unacceptable.`,
      solution: `
We introduced a **GitOps-centric DevOps pipeline** that treats Git as the single source of truth for both application code and infrastructure.

Target flow:

  Developer opens PR  ──►  CI (tests, lint, build)
               │
               └─►  Merge to main
                          │
                          ▼
               GitHub Actions builds images
                          │
                          ▼
               Push to Container Registry
                          │
                          ▼
               ArgoCD syncs desired state from Git
                          │
                          ▼
               Kubernetes cluster converges automatically

Key steps in the solution:

- Standardised all infrastructure as code using **Terraform** (VPC, clusters, databases, load balancers).
- Created per-service Helm charts and Kubernetes manifests stored alongside the application code.
- Introduced **ArgoCD** to continuously compare cluster state with the Git repository, surfacing drift and applying changes safely.
- Built a CI pipeline with **GitHub Actions** to run tests, build Docker images, and update Kubernetes manifests (image tags) automatically.
- Added deployment strategies such as **canary releases** (via Flagger/Istio) for high-risk services and simple rolling updates elsewhere.

Engineers now commit changes to Git, and the platform takes care of rolling those changes out in a controlled, observable way.`,
      architecture: [
        "Terraform as the single source of truth for cloud infrastructure (VPC, EKS clusters, RDS, IAM roles, networking).",
        "GitHub Actions CI workflows for running tests, building Docker images, and publishing them to a private container registry.",
        "Helm-based Kubernetes manifests stored in dedicated deploy/ folders per service, version-controlled alongside application code.",
        "ArgoCD instances per environment (staging, production) monitoring Git repos and synchronising desired vs actual state.",
        "Canary deployments managed via Flagger + Istio, gradually shifting traffic while monitoring error rate and latency metrics.",
        "Cluster-wide observability with Prometheus, Grafana, and Loki for metrics, dashboards, and log aggregation."
      ],
      results: [
        "Deployment time reduced from ~45 minutes of manual work to ~3 minutes of automated pipeline time per service.",
        "Deployment frequency increased from weekly releases to multiple safe deploys per day.",
        "Rollback time cut from 20–30 minutes to under 2 minutes by reverting Git and letting ArgoCD reconcile state.",
        "Significant reduction in deployment-related incidents, supported by canary releases and metric-driven rollbacks.",
        "Improved developer confidence and autonomy: feature teams can ship independently without waiting for an ops engineer."
      ]
    }
  }
];