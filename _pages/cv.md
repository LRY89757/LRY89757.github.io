---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<h1 class="col">
<font color=red>Attention!! Website Constructing, resume is not complete</font>
</h1>
---


Education
======
* B.S. in WuHan, [Huazhong University of Science and Technology](http://english.hust.edu.cn/), 2024(expected)
  * Want to pursure PhD Degree in AI Compiler
<!-- * B.S. in GitHub, GitHub University, 2012 -->
<!-- * M.S. in Jekyll, GitHub University, 2014 -->
<!-- * Ph.D in Version Control Theory, GitHub University, 2018 (expected) -->

<!-- >###Markdown 字体颜色改变
>​
>绿色字体：<font color =green>Markdown</font>
>红色字体：<font color = red>Markdown</font>
>蓝色字体：<font color =blue>Markdown</font>
>​
>​
>###Markdown 字体大小改变
>​
>size为1：<font size ="1">Markdown</font>
>size为5：<font size = "5">Markdown</font>
>size为10：<font size ="10">Markdown</font>
>​
>​
>###Markdown 字体样式改变
>​
>微软雅黑字体: <font face ="微软雅黑">Markdown</font>
>宋体字体：<font face = "宋体">Markdown</font>
>楷体字体：<font face ="楷体">Markdown</font>
>
>作者：Z先生点记
>链接：https://www.zhihu.com/question/21160553/answer/942069774
>来源：知乎
>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
> -->

<h2 class="col">
<font color=blue>Industrial Experiences</font>
</h2>

<!-- 1 -->
<div class="section-text col-right">
<h3><a href="#" style="text-decoration: none;"><span class="emph">Develop High</span> Performance Neural Network Inference Engine</a></h3>
</div>

<div><a href="https://www.tencent.com/en-us/" style="text-decoration: none;">Tencent Company</a>
<font size ="2">&emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&nbsp;ShenZhen, China; June 2022 - Nov. 2022 </font>
</div>

* Project: [ncnn](https://github.com/Tencent/ncnn), an open source project with **17k+** stars in Github
* Role: **Top15 committer** of this project(util `Nov.2022`), 253 committers in total.
* Mentor: [Nihui](https://github.com/nihui)(*with Github **5.6k** followers*)
* Duties included: Write and Optimize operators for ncnn.
  * Mainly aligned with pytorch, some examples I built
  * [GridSample](https://github.com/Tencent/ncnn/pull/4288): Given an input and a flow-field grid, computes the output using input values and pixel locations from grid.
  * [Gelu](https://github.com/Tencent/ncnn/pull/4144): implement `sse/avx/avx512` version of gelu, with a fast version of erfc

<!-- 2 -->
<div class="section-text col-right">
<h3><a href="#" style="text-decoration: none;"><span class="emph">Optimize</span> The Backend of LLVM for AI Chips</a></h3>
</div>

<div><a href="https://www.sensetime.com/en" style="text-decoration: none;">Intern @ Sensetime Company</a>
<font size ="2">&emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Shanghai, China; April 2023 - Present</font>
</div>

* Role: Intern
* Mentor: WenqiangYin
* Duties included: Write new pass and based on the new AI chips of Sensetime.
  * Such as support the 64-bit Instr
  * ISA like NVIDIA PTX  

<!-- 3 -->
<div class="section-text col-right">
<h3><a href="#" style="text-decoration: none;"><span class="emph">Deploy</span> High-FPS AI Models on Arm Chips</a></h3>
</div>

<div><a href="https://en.fiberhome.com/" style="text-decoration: none;"> FiberHome Telecommunication Technologies Company</a>
<font size ="2"> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; WuHan, China; April 2021 - June.2021</font>
</div>

> Establish a team of 7 undergraduate, 1 postgraduate in total for This Project.

* Role: **Leader** @ [Dian.AI](https://dian.org.cn/)
* Duties included: As the project leader, he is responsible for the whole process of calibration samples, selection, training network (lite-mspn/yolox) and deployment of high-performance Inference Networks to Arm CPU. 
* Mentor: [YayuGao](https://scholar.google.com.hk/citations?user=o42amRcAAAAJ)



<!-- 
<div class="row">
<div class="col">
<h3><a href="https://hpc.geekpie.club" style="text-decoration: none;">GeekPie_HPC @ ShanghaiTech</a></h3>
</div>
</div>
<div class="row subsection">
<div class="emph col"> Leader</div>
<div class="col-right light">September 2019 - November 2021</div>
</div>
<div>Establish a team of 16 undergraduate students in total for SCC Competition.
</div>
<div>
<ul class="desc">
<li> Profile using Arm Forge/Vtune/Perf, tuning scheduler/MPI affinity/OS params/program
parameters </li>
<li> Optimize Fortran/C++/Cuda memory/FS MPI/NCCL/Hovorod communication on 2-8 nodes' server
</li>
<li>Train new members who are interested in system for job-related skills.</li>
</ul></div>
</div> -->

<!-- Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3 -->

Work Experience
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Research Experince
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
   
Service and leadership
======
<!-- * Currently signed in to 43 different slack teams -->
