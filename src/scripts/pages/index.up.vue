<template lang="html">
		<div class="touch">
			<div class="move">
				<header>
					<a class="logo" href="#">
						<img src="../../../dev/media/images/index-mdd-logo.gif" alt="" />
					</a>
					<a class="shoppingcars" href="#">
						<img src="../../../dev/media/images/index-shoppingcar.gif" alt="" />
					</a>
					<a class="log" href="#">
						<img src="../../../dev/media/images/index-log.gif" alt="" />
					</a>
				</header>
				<section>
					<div class="search">
						<input type="text" placeholder="输入关键词或商品编号" />
					</div>
					<div class="banner">
					</div>
					<div class="nav">
						<ul>
							<li><a href="#" class="new">
								<img src="../../../dev/media/images/index-nav1.gif" alt="" />
							</a></li>
							<li><a href="#" class="female">
								<img src="../../../dev/media/images/index-nav2.gif" alt="" />
							</a></li>
							<li><a href="#" class="hot">
								<img src="../../../dev/media/images/index-nav3.gif" alt="" />
							</a></li>
							<li><a href="#" class="select">
								<img src="../../../dev/media/images/index-nav4.gif" alt="" />
							</a></li>
						</ul>
					</div>
					<div class="templates">
					</div>
				</section>
			</div>
		</div>
</template>



<script>
	
</script>



<style lang="scss">
@import "../../styles/yo/base.scss";
@import "../../styles/yo/variables.scss";
@import "../../styles/yo/reset.scss";
html{
    font-size: 31.25vm;
}
.move{
    @include flexbox();
    flex-direction: column;
    width: 100%;
    height: 1200px;
}
.touch{
	overflow-y: scroll;
    width: 100%;
    height: 100%;
}
header{
    background:#c7154a;
    width: 100%;
    height: .36rem;
    .logo{
        margin-left: 0.05rem;
        margin-top: 0.05rem;
        display: block;
        float: left;
        width: 1.2rem;
        height: .2rem;
    }
    .shoppingcars{
        margin-top: 0.02rem;
        display: block;
        float: right;
        width: 0.4rem;
        height: .35rem;
    }
    .log{
        margin-right: 0.1rem;
        margin-top: 0.02rem;
        display: block;
        float: right;
        width: .24rem;
        height: .37rem;
    }
}
section{
    background: #fff;
    @include flex();
    width: 100%;
    @include flexbox();
    flex-direction: column;
    .search{
        width: 100%;
        height: .49rem;
        background: #fff;
        input{
            border-radius: .5rem;
            height: .3rem;
            width: 95%;
            padding-left: 0.1rem;
            margin-left: 0.08rem;
            margin-top: 0.07rem;
            border:1px solid #969696;
            font-size: 0.13rem;
        }
    }
    .banner{
        width: 100%;
        height: 1.75rem;
        background: blue;
    }
    .nav{
        width: 100%;
        height: .96rem;
        background: gray;
        ul{
            width: 100%;
            height: 100%;
            @include flexbox();
            li{
                height: 100%;
                @include flex();
                background: white;
                a{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .templates{
        @include flex();
        background: beige;
        width: 100%;
    }
}
</style>