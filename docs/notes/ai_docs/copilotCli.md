---
title: Copilot Cli入門筆記
date: 2026-03-06
tags:
  - AI
  - CLI
description: 紀錄安裝與使用 Copilot CLI 的全過程，包括搭配 GitHub CLI 安裝新版、設定 MCP、Skill 以及開發流程。
---
# 探索 Copilot CLI 全紀錄

最近在學習如何使用 **CLI (命令列介面)** 來進行專案開發。在我陸續嘗試過 `gemini-cli` 與 `claude-cli` 之後，接下來就要將魔手伸向 GitHub 的親兒子——`copilot-cli` 了！

> 💡 **注意事項：** 
> 目前官方留下的 `Copilot-CLI` 安裝說明大多是舊版的（當時的模型最多只支援到 `codex 5.1`）。如果想要使用最新版本，必須先安裝 `GitHub CLI (gh)` 才能順利掛載套件。

因此，這篇文章打算完整紀錄我研究並使用 `copilot-cli` 的全過程。

## 本文涵蓋重點

1. **環境建置**：搭配 GitHub CLI 安裝最新版
2. **MCP 設定**：Model Context Protocol 的掛載與配置
3. **Skill 擴充**：為 AI 加入自定義的技能
4. **開發實戰**：實際應用在日常開發流程的經驗分享