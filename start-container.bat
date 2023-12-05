@echo off

docker run --rm --name reddiment -p 8888:8888 -v "%cd%"/.env:/app/.env alessiorizz/reddiment