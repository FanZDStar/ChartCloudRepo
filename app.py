'''
Author: ourEDA MaMing
Date: 2024-10-24 00:15:31
LastEditors: ourEDA MaMing
LastEditTime: 2024-11-27 20:24:02
FilePath: \ChartCloudRepo\app.py
Description: 李猴啊

Copyright (c) 2024 by FanZDStar , All Rights Reserved. 
'''
from flask import Flask, render_template,request, jsonify, send_file
import sqlite3
import os
import jieba  #分词
from matplotlib import pyplot as plt  #绘词，数据可视化
from wordcloud import WordCloud       #词云
from PIL import Image                 #图片处理
import numpy as np
import math

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/index")
def home():
    # return render_template("index.html")
    return index()

@app.route("/movie")
def movie():
    data_list = []
    con = sqlite3.connect("movie.db")
    cur = con.cursor()

    # 获取当前页码，默认第1页
    page = int(request.args.get('page', 1))
    per_page = 10  # 每页显示的记录数
    sql_count = 'SELECT COUNT(*) FROM movie250'
    cur.execute(sql_count)
    total_records = cur.fetchone()[0]  # 获取总记录数

    # 计算总页数
    total_pages = math.ceil(total_records / per_page)

    # 获取当前页的数据
    offset = (page - 1) * per_page
    sql = f'SELECT * FROM movie250 LIMIT {per_page} OFFSET {offset}'
    data = cur.execute(sql)
    for item in data:
        data_list.append(item)

    cur.close()
    con.close()

    # 返回渲染模板，附带分页信息
    return render_template(
        "movie.html",
        movies=data_list,
        page=page,
        total_pages=total_pages
    )
    






@app.route("/score")
def score():
    score = []  #评分
    num = []    #每个评分统计出的电影数量
    con = sqlite3.connect("movie.db")
    cur = con.cursor()
    sql = 'select score,count(score) from movie250 group by score'
    data = cur.execute(sql)
    for item in data:
        score.append(item[0])
        num.append(item[1])
    cur.close()
    con.close()
    return render_template("score.html",score=score,num = num)


@app.route("/word")
def word():
    return render_template("word.html")

@app.route("/team")
def team():
    return render_template("team.html")


@app.route("/WordCloudTool")
def WordCloudTool():
    return render_template("WordCloudTool.html")

@app.route("/WordCloudTool", methods=["POST"])
def generate_wordcloud():
    user_text = request.form.get("user_text", "")
    stop_words_input = request.form.get("stop_words", "")
    user_file = request.files.get("user_file")

    # 确保用户提供文本或者上传了文件
    if not user_text.strip() and not user_file:
        return jsonify({"error": "文本不能为空，或请上传文件"}), 400

    # 停用词处理：获取用户自定义的停用词列表
    stop_words = set([
        "的", "了", "在", "是", "都", "与", "和", "对", "为", "一个", "就", "不", "有", "人", "都", "我们", "你", "这", "它", "我", "自己", "电影",
        "最", "被", "就是"
    ])
    
    # 如果用户有输入自定义停用词
    if stop_words_input:
        custom_stop_words = stop_words_input.split(",")
        stop_words.update([word.strip() for word in custom_stop_words])

    # 如果用户上传了文件，读取文件内容
    if user_file:
        try:
            file_content = user_file.read().decode("utf-8")  # 文件解码
        except UnicodeDecodeError:
            return jsonify({"error": "文件解码失败，请上传UTF-8编码的文本文件"}), 400
    else:
        file_content = user_text

    # 分词并过滤停用词
    cut = jieba.cut(file_content)
    filtered_cut = [word for word in cut if word not in stop_words]
    string = ' '.join(filtered_cut)

    # 创建词云
    img = Image.open("./static/assets/img/tree.jpg")
    img_array = np.array(img)
    wc = WordCloud(
        background_color='white',
        mask=img_array,
        font_path=r"FZSTK.TTF"
    )
    wc.generate_from_text(string)

    # 保存词云图片
    output_path = "./static/assets/img/generated_wordcloud.jpg"
    wc.to_file(output_path)

    # 返回生成的词云图片
    return send_file(output_path, mimetype="image/jpeg")

if __name__ == '__main__':
    app.run(debug=True)