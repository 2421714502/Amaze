var htmHeader=`<nav class="nav">
				<div class="contanier-fluid">
					<div class="nav-header">
						<img src="../../img/logo.png" />
					</div>
					<div class="nav-sm">
						<div class="nav-left">
							<div class="menu-icon-box color-gray">
								<span class="icon-reorder"></span>
							</div>
							<div class="search">
								<div class="search-icon-box color-gray">
									<span class="icon-search"></span>
								</div>
								<input type="text" placeholder="搜索内容..." />
							</div>
						</div>
						<div class="n-right color-gray">
							<span class="hidden-xs hidden-sm">欢迎你，Amaze UI</span>
							<span class="icon-envelope">
								<span class="badge" style="background:#5eb95e">4</span>
							</span>
							<span class="icon-bell-alt">
								<span class="badge" style="background:#f37b1d">5</span>
							</span>
							<span class="clos">
								<span class="icon-hand-right"></span>
								退出
							</span>
						</div>
					</div>
				</div>
			</nav>`;
var sidebarHtml=`
				<div class="avatarbox">
					<img class="img-circle" src="../../img/user04.png" />
					<p>
						<span class="icon-circle-blank color-green"></span>
						<span class="color-white">禁言小张</span>
						<a href="" class="color-text-gray">
							<span class="icon-magic"></span>
							<span>账号设置</span>
						</a>
					</p>
				</div>
				<div class="sidebar-menu color-bg-gray">
					<ul class="color-gray">
						<div class="sidebar-title">
							<h5><span class="color-white">Components</span> <small>附加组件</small></h5>
						</div>
						<li class="index" data-href="../../index.html">
							<span class="icon-laptop"></span>
							<span>首页</span>
						</li>
						<li class="tab" data-href="../../page/table/table.html">
							<span class="icon-table"></span>
							<span>表格</span>
						</li>
						<li class="th1" data-href="../../page/th1/th1.html">
							<span class="icon-th"></span>
							<span>日历</span>
						</li>
						<li class="form" data-href="../..//page/form/form.html">
							<span class="icon-list-alt"></span>
							<span>表单</span>
						</li>
						<li class="arts" data-href="../..//page/arts/arts.html">
							<span class="icon-bar-chart"></span>
							<span>图表</span>
						</li>
					</ul>
					<ul class="color-gray">
						<div class="sidebar-title">
							<h5><span class="color-white">Page</span> <small>常用页面</small></h5>
						</div>
						<li id="collapse-m" class="dorpdown-toggle" data-toggle="collapse" data-target="#collapse-menu">
							<span class="icon-table"></span>
							<span>数据列表</span>
							<span class="icon-chevron-down arrow-down"></span>
						</li>
						<ol class="collapse" id="collapse-menu">
							<li class="text-list" data-href="../../page/text-list/text-list.html">
								<span class="icon-angle-right"></span>
								<span>文字列表</span>
							</li>
							<li>
								<span class="icon-angle-right"></span>
								<span>图文列表</span>
							</li>
						</ol>
						<li>
							<span class="icon-paper-clip"></span>
							<span>注册</span>
							<span class="badge color-bg-blue">6</span>
						</li>
						<li>
							<span class="icon-link"></span>
							<span>登录</span>
						</li>
						<li>
							<span class="icon-desktop"></span>
							<span>404错误</span>
						</li>
					</ul>
				</div>`
var sidebar=$("<div class='right-sidebar'></div>").html(sidebarHtml)
$("body header").html(htmHeader)
$(".main").prepend(sidebar)