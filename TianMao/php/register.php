<?php
    header("content-type:text/html;charset=utf8");
    include('public.php');

    //接收前端传来的数据
    $uname = $_REQUEST['uname'];
    $upwd = $_REQUEST['upwd'];
    $uphone = $_REQUEST['uphone'];

    //查找用户名   若存在则注册失败，若不存在注册成功

    $sql = "select * from user where uname='$uname'";

    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    //查找手机号   若存在则注册失败，若不存在注册成功

    $sql1 = "select * from user where phone='$uphone'";

    $res1 = mysqli_query($connect,$sql1);

    $arr1 = mysqli_fetch_assoc($res1);

    if($arr){
        echo json_encode(array(
            'state' => '0',
            'info' => '账号已存在，请重新注册'
        ));
    }else if($arr1){
        echo json_encode(array(
            'state' => '0',
            'info' => '该手机号已被注册'
        ));
    }else{
        //往数据库里添加信息
        $insert = "insert into user (uname,pwd,phone) values ('$uname','$upwd','$uphone')";
        mysqli_query($connect,$insert);
        echo json_encode(array(
            'state' => '1',
            'info' => '注册成功'
        ));
    }
?>