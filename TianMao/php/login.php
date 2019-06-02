<?php
    header("content-type:text/html;charset=utf8");
    include('public.php');

    //接收前端传来的数据
    $uname = $_REQUEST['uname'];
    $upwd = $_REQUEST['upwd'];

    //查找若用户名存在，则正确，否则返回用户名不存在

    $sql = "select * from user where uname='$uname'";

    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    if($arr){
        //用户名存在   开始判断密码
        if($upwd == $arr['pwd']){
            echo json_encode(array(
                'state' => '1',
                'info' => '登录成功'
            ));
        }else{
            echo json_encode(array(
                'state' => '0',
                'info' => '密码错误'
            ));
        }
    }else{
        //用户名不存在
        echo json_encode(array(
            'state' => '0',
            'info' => '用户名不存在'
        ));
    }
?>