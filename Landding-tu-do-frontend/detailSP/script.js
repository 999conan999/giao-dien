// Todo list
// xu ly xem them binh luan



$(document).ready(function(){
    var img_input;
    var triger_show_cm='';
    //
    var test1='<div class="com1"> <div class="w1"> <b>Võ Danh</b> <img class="lazyload luna" data-srcset="./check.png"><i>Đã mua tại vacca.webmau68.com</i> <p>Shop dễ thương,hỗ trợ nhiệt tình,giá siêu tốt,đặt chiều qa ság nay đã nhận đc lun.Vừa kịp thuốc hết.Bé đã dùg đc 2 hũ r,bé thích vị dâu của thuốc dễ uốg.Đây là 1 lựa chọn tốt dành cho các mẹ có con bị DUDB như e, vừa bổ sung d3&canxi ko fai uốg lắc nhắc khỏi qên.Ủg hộ dài lâu.cho 5k sao cũg đc lun🤩</p> <div class="w-img-com row"> <div class="dev-3 pdr-3"> <img class="img-com" src="https://anbinhnew.com/wp-content/uploads/2021/01/tu-nhua-dung-quan-ao-co-ke.jpg" width="100%" /> </div> <div class="dev-3 pdr-3"> <img class="img-com" src="https://anbinhnew.com/wp-content/uploads/2021/01/tu-nhua-dung-quan-ao-co-ke.jpg" width="100%" /> </div> <div class="dev-3 pdr-3"> <img class="img-com" src="https://anbinhnew.com/wp-content/uploads/2021/01/tu-nhua-dung-quan-ao-co-ke.jpg" width="100%" /> </div> </div> <span class="rep">Trả lời</span class="rep"> <div class="w1 w2"> <b>Admin</b> <p>Shop xin cảm ơn bạn rất nhiều!</p> </div> </div> <div class="w1"> <b>Võ Danh</b> <img class="lazyload luna" data-srcset="./check.png"><i>Đã mua tại vacca.webmau68.com</i> <p>Shop dễ thương,hỗ trợ nhiệt tình,giá siêu tốt,đặt chiều qa ság nay đã nhận đc lun.Vừa kịp thuốc hết.Bé đã dùg đc 2 hũ r,bé thích vị dâu của thuốc dễ uốg.Đây là 1 lựa chọn tốt dành cho các mẹ có con bị DUDB như e, vừa bổ sung d3&canxi ko fai uốg lắc nhắc khỏi qên.Ủg hộ dài lâu.cho 5k sao cũg đc lun🤩</p> </div> <div class="w1"> <b>Võ Danh</b> <img class="lazyload luna" data-srcset="./check.png"><i>Đã mua tại vacca.webmau68.com</i> <p>Shop dễ thương,hỗ trợ nhiệt tình,giá siêu tốt,đặt chiều qa ság nay đã nhận đc lun.Vừa kịp thuốc hết.Bé đã dùg đc 2 hũ r,bé thích vị dâu của thuốc dễ uốg.Đây là 1 lựa chọn tốt dành cho các mẹ có con bị DUDB như e, vừa bổ sung d3&canxi ko fai uốg lắc nhắc khỏi qên.Ủg hộ dài lâu.cho 5k sao cũg đc lun🤩</p> <span class="rep">Trả lời</span class="rep"> <div class="w1 w2"> <b>Admin</b> <p>Shop xin cảm ơn bạn rất nhiều!</p> </div> </div></div>';
    let test2='<div style=" text-align: center; ">Chưa có bình luận.</div>';
    //
    var user_comments=JSON.parse(localStorage.getItem("user_comments"))==null?[]:JSON.parse(localStorage.getItem("user_comments"));
    $(".bl_btn").click(function(){
       let i= $(this).attr("data");
        if(triger_show_cm.search(i+',')==-1){
            $("#comment_"+i).show(300,"linear");
            triger_show_cm+=i+',';
            let a=jQuery("span", this).text();

            //[todo] lấy giá trị comment từ server hiển thị ra đây
            
            // Abnzsy_Hrsxko_0

                if(Number(a)==0){
                    $("#noComment_"+i).show();
                    $("#loading_"+i).hide();
                }else{
                    setTimeout(()=>{
                        let rs='';
                        let index= $(this).attr("index");
                        let k=0;
                        user_comments.forEach(e => {
                            if(e.index==index){
                                rs=e.comment+rs;
                                k++;
                            }
                        });
                        $("#loading_"+i).hide();
                        let bl=$("#bnt_bl_"+i).text();
                        $("#bnt_bl_"+i).html(Number(bl)+k);
                        //[todo] here
                        $("#showrs_"+i).html(rs+test1)
                    },1000)
                }
                
                
            

        }else{//da bam roi
            $("#comment_"+i).show(300,"linear");
        }
    })
    // an binh luan
    $(".anBinhLuan").click(function(){
        let i= $(this).attr("data");
       $("#comment_"+i).hide(300,"linear");
    })
    // viet binh luan
    $(".vietBinhLuan").click(function(){
        $(this).hide();
        let i= $(this).attr("data");
       $("#write_comment_input_"+i).show(300,"linear");
    })
    // nhấn like
    var triger_like=(localStorage.getItem("comment_like"))==null?'':(localStorage.getItem("comment_like"));
    var triger_liked=(localStorage.getItem("comment_liked"))==null?'':(localStorage.getItem("comment_liked"));
    $(".likez").click(function(){
        let id= $(this).attr("data");
        if(triger_like.search(id+',')==-1){// chua co gi
            jQuery("div", this).addClass("liked");
            let i=jQuery("span", this).text();
            jQuery("span", this).html(Number(i)+1);
            triger_like+=id+','
            localStorage.setItem("comment_like", triger_like);
            if(triger_liked.search(id+',')==-1){// post like only one
                //[todo] post like here;
                triger_liked+=id+','
                localStorage.setItem("comment_liked", triger_liked);
            }
        }else{// da co
            jQuery("div", this).removeClass("liked");
            let i=jQuery("span", this).text();
            let a=Number(i)>0?Number(i)-1:0;
            jQuery("span", this).html(a);
            triger_like=triger_like.replace(id+',', "");
            localStorage.setItem("comment_like", triger_like);
        }
    })
    $(".likez").map(function() {
        let id= $(this).attr("data");
        if(triger_like.search(id+',')>-1){
            jQuery("div", this).addClass("liked");
        }
    })
    // nhấn share
    var triger_shared=(localStorage.getItem("comment_shared"))==null?'':(localStorage.getItem("comment_shared"));
    $(".sharez").click(function(){
        let id= $(this).attr("data");
        if(triger_shared.search(id+',')==-1){// post like only one
            //[todo] post share here;
            triger_shared+=id+','
            localStorage.setItem("comment_shared", triger_shared);
            let i=jQuery("span", this).text();
            jQuery("span", this).html(Number(i)+1);
        }
    })
    // Nhấn bình luận
    $(".sendbl").click(function(){
        let i= $(this).attr("data");
        let index= $(this).attr("index");
        let comment=$("#rs_comment_"+i).val();
        let name=$("#author_"+i).val();
        let phone=$("#phone_"+i).val();
        let is_ok=validate_comment(comment,name,phone);
        if(is_ok){
            // [todo] post binh luan o day

            // luu vao local
            let your_comment='<div class="com1"> <div class="w1"> <b>'+name+'</b><span style="padding-left: 12px;"> <svg width="24px" hight="24px" style="fill:#446cb3;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z"/></svg></span><i style="color:#446cb3;">Người ghé thăm</i> <p>'+comment+'</p> </div> </div>';
            user_comments.push({
                i:i,
                index:index,
                comment:your_comment
            })
            localStorage.setItem("user_comments", JSON.stringify(user_comments));
            let html=your_comment+ $("#showrs_"+i).html();
            $("#showrs_"+i).html(html);
            $("#noComment_"+i).hide();
            $("#rs_comment_"+i).val('');
            $("#write_comment_input_"+i).hide(300,"linear");
            $(".vietBinhLuan").show(300,"linear");
            let bl=$("#bnt_bl_"+i).text();
            $("#bnt_bl_"+i).html(Number(bl)+1);
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#bnt_bl_"+i).offset().top
            }, 800);
        }
    })
    // nhấn xem thêm bình luận
    $(".more-bl").click(function(){
        let i= $(this).attr("data");
        // [todo] get post here
        $("#showrs_"+i).append(test1);
    })
    // hien thi hinh anh input img
    $("#img_read").change(function(){
        readURL(this);
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            $('#show_img').html('');
            for(let i=0;i<input.files.length;i++){
                if(input.files[i]){ 
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        let  imgs='<img class="uouo" src="'+e.target.result+'">';
                        $('#show_img').append(imgs);
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            };

        }
    }
    function validate_comment(comment,name,phone){
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if(comment.length<20){
            alert('Nội dung "Bình luận" ít nhất 10 kí tự, phiền bạn ghi thêm cảm nhận.')
            return false;
        }
        if (vnf_regex.test(phone) == false) {
            alert('Số điện thoại không chính xác!')
            return false;
        }
        if(name.length<2){
            alert('Bạn cần điền thêm thông tin "Họ tên"!')
            return false;
        }
        return true
    }
    
})