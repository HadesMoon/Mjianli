$(function(){
  $(".jl_choose_main").click(function(){
    $(".jl_choose_list").toggle();
  });

  var edit1=$(".user_info_show .edit"),
      cancel1=$(".user_cont_edit .cancel"),
      userShow=$(".user_info_show"),
      userEdit=$(".user_info_edit");

  var edit2=$(".basic_info_title .edit"),
      cancel2=$(".basic_info_edit .cancel"),
      basicShow=$(".basic_show"),
      basicEdit=$(".basic_info_edit");
  
  var edit3=$(".intention .edit"),
      cancel3=$(".intention_cont_edit .cancel"),
      intentionShow=$(".intention_cont_show"),
      intentionEdit=$(".intention_cont_edit");
  
  var  addEdu=$(".other_Edu a"),
       extEdu=$(".study_experience_add .cancel"),
       eduAddShow=$(".other_Edu"),
       eduAdd=$(".study_experience_add");

  var editEdu=$(".study_experience_show .edit"),
      eduCancel=$(".study_experience_edit .cancel"),
      eduShow=$(".study_experience_show"),
      eduEdit=$(".study_experience_edit");

  var editLang=$(".lang_ability_show .edit"),
      langCancel=$(".lang_ability_edit .cancel"),
      langShow=$(".lang_ability_show"),
      langEdit=$(".lang_ability_edit");

  var editSkill=$(".skill_show .edit"),
      skillCancel=$(".skill_cont .cancel"),
      skillShow=$(".skill_show"),
      skillEdit=$(".skill_edit");

  var editAdd=$(".add_info_show .edit"),
      addCancel=$(".add_info_edit .cancel"),
      addShow=$(".add_info_show"),
      addEdit=$(".add_info_edit");
  
  var editSelf=$(".self_eval_show .edit"),
      selfCancel=$(".self_eval_edit .cancel"),
      selfShow=$(".self_eval_show"),
      selfEdit=$(".self_eval_edit");



    showEdit(edit1,cancel1,userShow,userEdit);
    showEdit(edit2,cancel2,basicShow,basicEdit);
    showEdit(edit3,cancel3,intentionShow,intentionEdit);
    showEdit(editEdu,eduCancel,eduShow,eduEdit);//教育编辑
    showEdit(addEdu,extEdu,eduAddShow,eduAdd);//教育添加
    showEdit(editLang,langCancel,langShow,langEdit);
    showEdit(editSkill,skillCancel,skillShow,skillEdit);//技能添加
    showEdit(editSelf,selfCancel,selfShow,selfEdit);//自我评价
    showEdit(editAdd,addCancel,addShow,addEdit);//附加信息

  function showEdit(editBtn,closeBtn,show,hide){
       editBtn.click(function(){
           show.hide();
           hide.show();
       });
       closeBtn.click(function(){
           show.show();
           hide.hide();
       });
  }
    $(".study_experience_cont").on("click",".study_experience_show .edit",function(){
      var editEdu=$(".study_experience_show .edit"),
          eduShow=$(".study_experience_show"),
          eduEdit=$(".study_experience_edit");
 
          eduShow.hide();
          eduEdit.show();

          var $that=$(this);

          var schoolNameE=$(this).closest(".school").find("span"),
              zyNameE=$(this).closest(".study_experience_show").find(".zhuanye_name span"),
              xueliE=$(this).closest(".study_experience_show").find(".xueli span"),
              tongzhaoE=$(this).closest(".study_experience_show").find(".tongzhao span"),
              eduYear=$(this).closest(".school").find("time i"),
              eduMonth=$(this).closest(".school").find("time em"),
              eduNow=$(this).closest(".school").find("time em");

          var school_name=$(".study_experience_edit .school_name"),
              zy_name=$(".study_experience_edit .zy_name"),
              edu_E=$(".study_experience_edit .edu"),
              eduYear_E=$(".study_experience_edit .study_time_year"),
              eduMonth_E=$(".study_experience_edit .study_time_month"),
              eduNow_E=$(".study_experience_edit .study_time_month"),
              Tz=$("#Tz");

              school_name.val(schoolNameE.text());
              zy_name.val(zyNameE.text());
              edu_E.val(xueliE.text());
              eduYear_E.val(eduYear.text());
              eduMonth_E.val(eduMonth).text();
              eduNow_E.val(eduNow.text());
              
              if (tongzhaoE.text()=="是") {
                Tz.attr("checked",true);
              }else{
                Tz.attr("checked",false);
              };

             
              $(".study_experience_edit .store").one("click",function(){
                $(".study_experience_edit").hide();
                $(".study_experience_show").show();
               schoolNameE.text(school_name.val());
                zyNameE.text(zy_name.val());
                xueliE.text(edu_E.val());
                eduYear.text(eduYear_E.val());
                eduMonth.text(eduMonth_E.val());
                eduNow.text(eduNow_E.val());
                  if (Tz.attr("checked")=="checked") {
                    tongzhaoE.text("是");
                  }else{
                   tongzhaoE.text("否");
                  };
                })

          

     })
     
     $(".study_experience_edit .cancel").click(function(){
         var editEdu=$(".study_experience_show .edit"),
          eduShow=$(".study_experience_show"),
          eduEdit=$(".study_experience_edit");

          eduShow.show();
          eduEdit.hide();



     })

     $(".study_experience_cont").on("click",".study_experience_show .delete",function(){
       $(this).closest(".study_experience_show").remove();
     })
 


    // 个人信息
    var user_name=$(".user_name"),
        job_name=$(".job_name"),
        compeny_name=$(".compeny_name"),
        myjob_addr=$(".myjob_addr"),
        my_hangye=$(".my_hangye"),
        my_job=$(".my_job");
    var userName=$(".userName"),
        comNameVal=$(".comNameVal"),
        jobNowVal=$(".jobNowVal"),
        jobName=$(".jobName"),
        life_addrVal=$(".life_addrVal");

    
        edit1.click(function(){
          userName.val(user_name.text());
        comNameVal.val(compeny_name.text());
        jobNowVal.val(my_job.text());
        jobName.val(job_name.text());
        life_addrVal.val(myjob_addr.text());
        if ($(":input").val()=="") {
        $(":input").css("border-color","red");
      }else{
        $(":input").css("border-color","#ccc");
      };
       
        })
           $(":input").blur(function(){
      if ($(this).val()=="") {
        $(this).css("border-color","red");
      }else{
        $(this).css("border-color","#ccc");
      };
    })
    

           var store=$(".user_cont_edit .store");
    // showEdit(edit1,store,userShow,userEdit);
    
    store.click(function(){
       
      if (userName.val()!=""&&comNameVal.val()!=""&&jobNowVal.val()!=""&&jobName.val()!=""&&life_addrVal.val()!="") {
         user_name.text(userName.val());
      compeny_name.text(comNameVal.val());
      my_job.text(jobNowVal.val());
      job_name.text(jobName.val());
      myjob_addr.text(life_addrVal.val());
       if ($(".userSex :radio[name='userSex']:checked").val()=='女') {
          $(".user_pic img").attr("src","images/girl.gif");
          $(".user_pic_edit img").attr("src","images/girl.gif");
       }else{
          $(".user_pic img").attr("src","images/user_img_default.gif");
          $(".user_pic_edit img").attr("src","images/user_img_default.gif");
       };
       userShow.show();
       userEdit.hide();
      }else{
        alert("不能有空");
      };
    });




    // 基本资料
    var born_time=$(".born_time"),
        hunyin_zhuangtai=$(".hunyin_zhuangtai"),
        guoji=$(".guoji"),
        hukou=$(".hukou"),
        zhuangTai=$(".zhuangTai");
    var year_select=$(".year_select"),
        guoji_edit=$(".guoji_edit"),
        zhuangtai=$(".zhuangtai"),
        hunyin=$(".hunyin"),
        hukou_edit=$(".hukou_edit");

        edit2.click(function(){
          year_select.val(born_time.text());
          hunyin.val(hunyin_zhuangtai.text());
          guoji_edit.val(guoji.text());
          hukou_edit.val(hukou.text());
          zhuangtai.val(zhuangTai.text());
        });
    var store2=$(".basic_info_edit .store");
    // showEdit(edit2,store2,basicShow,basicEdit);
        store2.click(function(){
        var inputText= $(".basic_info_edit").find(":input");
        var num=0;
           inputText.each(function(){
            if ($(this).val()=="") {
            num++;
           };
           })

           if (num>0) {
            alert("表单不能为空");
           }else{
            born_time.text(year_select.val());
          hunyin_zhuangtai.text(hunyin.val());
          guoji.text(guoji_edit.val());
          hukou.text(hukou_edit.val());
          zhuangTai.text(zhuangtai.val());
          basicShow.show();
          basicEdit.hide();
           }
          
        });


    // 求职意向
       var qwHangye=$(".intention_cont_show li:eq(0) span"),
           qwZhineng=$(".intention_cont_show li:eq(1) span"),
           qwDidian=$(".intention_cont_show li:eq(2) span"),
           mbNianxin=$(".intention_cont_show li:eq(3) span"),
           qwNianxin=$(".intention_cont_show li:eq(4) span");
       var hangye=$(".hangye2"),
           hangyeF=$("#hangyeF"),
           zhineng=$(".zhineng"),
           qiwang_addr=$(".qiwang_addr"),
           qiwang_nianxin=$(".qwNianxin"),
           muqian_nianxin=$(".nianxin"),
           every_month1=$(".eMonth1"),
           all_month1=$(".aMonth1"),
           every_month2=$(".eMonth2"),
           all_month2=$(".aMonth2");
       
       

        function cheng(a){
          return (a*12)/10000;
        }

        edit3.click(function(){

          hangye.text(qwHangye.text());
          zhineng.val(qwZhineng.text());
          qiwang_addr.text(qwDidian.text());
            qiwang_nianxin.text(qwNianxin.text());
            muqian_nianxin.text(mbNianxin.text());
            every_month1.val(parseFloat(qwNianxin.text())*10000/12);
            every_month2.val(parseFloat(mbNianxin.text())*10000/12);
            // $(".del").show();
        });
      var store3=$(".intention_cont_edit .store");
      showEdit(edit3,store3,intentionShow,intentionEdit);

          store3.on("click",function(){
        
          var M1=parseInt(every_month1.val()),
           
                M2=parseInt(every_month2.val());
            var hangye=$(".hangye2");
            var hangyeBox=$(".hangye");
            // alert(hangye.text());
           // qwHangye.text(hangye.text());
            qiwang_nianxin.text(cheng(M1));
              muqian_nianxin.text(cheng(M2));
            qwZhineng.text(zhineng.val());
            qwNianxin.text(qiwang_nianxin.text());
            mbNianxin.text(muqian_nianxin.text());
          });
         
         hangyeF.click(function(){
          $(".hangye_choose").show();


         })

         $(".choose_close").click(function(){
          $(".hangye_choose").hide();
         });
         $(".hangye_choose .cancel").click(function(){
          $(".hangye_choose").hide();
         });
         /*$("#del").click(function(){
          $(this).prev().empty();
             $(this).hide();
          return false;
         });*/
         hangyeF.on("click",".del",function(){
          $(this).prev().remove();
          $(this).remove();
          return false;
         })


      

        $(".hangye_choose .store").click(function(){
          $(".hangye_choose").hide();
       
          var hangyeText=$(".hangye_choose_cont :checked"),
              hangyeBox=$(".hangye");
            // hangye.text(hangyeText);
                hangyeBox.empty();
                qwHangye.text("");
                hangyeText.each(function(index){

                   var hText=$(this).siblings("span").text();
                   hangyeBox.append("<span><b class='hangye2'>"+hText+"</b><a href='javascript:;'class='del'>×</a></span>");
                   
                   qwHangye.append(hText);
                });

           
              
           
               
        })

       /* $(".hangye_choose_cont :checkbox").click(function(){
           var checkbox=$(".hangye_choose_cont :checkbox"),
                 checked=$(".hangye_choose_cont :checked");
          if (checked.length>=3) {
            checkbox.attr("disabled",true);
            checked.attr("disabled",false);
          }else{
            checkbox.attr("disabled",false);
          };
          
         })*/

        var checkbox=$(".hangye_choose_cont :checkbox");
                 

            checkbox.each(function(index){
              $(this).click(function(){
                var checkbox=$(".hangye_choose_cont :checkbox"),
                  checked=$(".hangye_choose_cont :checked");

                if (checked.length>=2) {
                  checkbox.attr("disabled",true);
                  checked.attr("disabled",false);
                }else{
                  checkbox.attr("disabled",false);
                };
              })

            })

    // 教育编辑

     /*editEdu.click(function(){
      $(".study_experience_show").hide();
     })*/

     // 教育添加
       var addEduStore=$(".study_experience_add .store");
       showEdit(addEdu,addEduStore,eduAddShow,eduAdd);


      
       addEduStore.click(function(){

        var schoolNameA=$(".study_experience_add .school_name").val(),
            zyNameA=$(".study_experience_add .zy_name").val(),
            studyTimeY_A=$(".study_experience_add .study_time_year").val(),
            studyTimeM_A=$(".study_experience_add .study_time_month").val(),
            NowStudyTime_A=$(".study_experience_add .now_study_time").val(),
            edu_A=$(".study_experience_add .edu").val(),
            tongzhaoA=$(".tongzhaoAdd").is(":checked");
           if (tongzhaoA==true) {
            tongzhaoTxt="是";
           }else{
            tongzhaoTxt="否";
           };

       var Txt='<div class="study_experience_show"><div class="school"><span>'+schoolNameA+'</span><time>（<i>'+studyTimeY_A+'</i>/<em>'+studyTimeM_A+'</em>–<b>'+NowStudyTime_A+'</b>）</time><div class="btns fr"><a href="javascript:;" class="icon_16 edit"></a><a href="javascript:;" class="icon_16 delete"></a></div></div><div class="zhuanye clearfix"><div class="zhuanye_name fl"><label>专业名称：</label><span>'+zyNameA+'</span></div><div class="xueli fl"><label>学历：</label><span>'+edu_A+'</span></div><div class="tongzhao fl"><label>是否统招:</label><span>'+tongzhaoTxt+'</span></div></div></div>';

        $(".study_experience_edit").before(Txt);

       })

    

    // 语言能力添加
     var langEditStore=$(".lang_ability_edit .store");
         langEditStore.click(function(){

          var langCheck=$(".check_group :checkbox:checked");
          var checkBox=$(".lang_ability_show").find("span");
              checkBox.empty();
              langCheck.each(function(){
                var langText=$(this).siblings("span").text();
                var moreLang=$(this).siblings(".lang_more").find(":radio:checked").siblings("span").text();
                if (moreLang!="") {
                  checkBox.append("、"+langText+"("+moreLang+")");
                }else{
                 checkBox.append("、"+langText);  
                }

                    

              })
              langEdit.hide();
              langShow.show();
         })

         var label=$(".lang_more label :radio");
         
             label.each(function(){
              var that=$(this);
              $(this).click(function(){
                that.prop("checked",true);
                if (that.prop("checked")==true) {
                  that.closest(".lang_more").siblings(":checkbox").prop("checked",true);
                }else{
                   that.closest(".lang_more").siblings(":checkbox").prop("checked",false);
                };
                
              })
               
             })

        var label2=$(".checkbox");

            label2.click(function(){
              if ($(this).prop("checked")==false) {
                 $(this).siblings(".lang_more").find(":radio").prop("checked",false);
              };
            })

                            
              
 


     // 技能添加

      
      $(".skill_edit").on("click",".skill_now a",function(){
        $(this).parent("span").remove();
      })
      /*shan.each(function(){
        var $thatS=$(this);
        $(this).on("click",function(){
          $thatS.parent("span").remove();
        })
      })*/

      var add_skill=$(".add_skill"),
          add_cont=$(".add_cont");

       add_skill.click(function(){
        var skill_name=add_cont.val();
        var skill="<span><b>"+skill_name+"</b><a href='javascript:;'>×</a></span>"
        $(".skill_now").append(skill);
        add_cont.val("");
       })

       var  skillStore=$(".skill_edit .store");


            skillStore.click(function(){
              $(".skill_show ul").empty();
              $(".skill_now b").each(function(){
                var skillThat=$(this);
                $(".skill_show ul").append("<li>"+skillThat.text()+"</li>");
              })
              skillShow.show();
              skillEdit.hide();
            })
      

      // 自我评价
       var selfText=$(".self_eval_edit .form_input"),
           selfStore=$(".self_eval_edit .store");
       
       editSelf.click(function(){
            selfText.val(selfShow.find("span").text());
       });

       selfStore.click(function(){
             selfShow.find("span").text(selfText.val());
             selfShow.show();
             selfEdit.hide();

       })


       // 附加信息
       var addText=$(".add_info_edit .form_input"),
           addStore=$(".add_info_edit .store");

           editAdd.click(function(){
            addText.val(addShow.find("span").text());
           })

           addStore.click(function(){
            addShow.find("span").text(addText.val());
            addShow.show();
            addEdit.hide();
           })






       

});