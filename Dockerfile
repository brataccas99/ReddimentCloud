FROM jupyter/base-notebook

WORKDIR /app

RUN pip install praw \
    pip install nltk \
    pip install tqdm \
    pip install torch \
    pip install numpy \
    pip install emoji \
    pip install pandas \
    pip install pymongo \
    pip install wordcloud \
    pip install matplotlib \
    pip install langdetect \
    pip install transformers \
    pip install python-dotenv \
    pip install beautifulsoup4

COPY main* ./

EXPOSE 8888

CMD ["jupyter", "notebook"]