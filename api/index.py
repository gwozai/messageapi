from flask import Flask, jsonify
from flask import render_template #引入模板插件

app = Flask(__name__,
static_folder='./dist',  #设置静态文件夹目录
template_folder = "./dist",
static_url_path="")  #设置vue编译输出目录dist文件夹，为Flask模板文件目录
@app.route('/')
def index():
    return render_template('index.html',name='index') #使用模板插件，引入index.html。此处会自动Flask模板文件目录寻找index.html文件。
@app.route('/hi')
def hi():
    return jsonify({"message": "Hello from Flask!"})
# @app.route('/hi'):
if __name__ == '__main__':
    app.run(
      debug=True,  # 调试打开
      host='0.0.0.0',  # ip
      port=5000,  # 端口
      # ssl_context='adhoc',  # 默认SSL证书，实现https
      threaded=True,  # 多线程
    )

