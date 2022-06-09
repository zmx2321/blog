# java入门练习题2
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 问题1
> 用Arrays类sort()对数组元素进行升序降序排列
```java
package demo.arr.ArraysClassDemo;

import java.util.Arrays;

public class ArraysClassDemo {
	public static void main(String[] args) {
		 int[] vec={0,15,-14,45,20,70};  
		 Arrays.sort(vec);
		 
		 System.out.println("升序排列：");
		 for (int i=0;i<vec.length ;i++){   
			 System.out.print(vec[i]+" ");   
		 }
		 System.out.println("\n");
		 
		 System.out.println("降序排列：");
		 for (int i=vec.length-1;i>=0 ;i--){   
			 System.out.print(vec[i]+" ");   
		 }
	}
}
```

## 2. 问题2
> 用Arrays类sort()对数组改成字符串输出
```java
package demo.arr.arraysSort;

import java.util.Arrays;

public class ArraysSort {
	public static void main(String[] args){
    int[] scores = {78,93,97,84,63};
    
    System. out.println( "遍历数组中的值" );
    
    for( int i=0 ; i< scores. length ; i++){
      System. out.print( scores[ i]+ " ");
    }
    Arrays. sort(scores);
    
    System. out.println( "\n\r排序后数组元素中的值" );
    
    for( int i=0 ; i< scores. length ; i++){
      System. out.println( scores[i]);
    }
    
    System. out.println( "\n改成字符串输出：" );
    
    System. out.println(Arrays. toString(scores));
  }
}
```

## 3. 问题3
### 3.1. 数组新增
```java
package demo.arr.arrOperation;

import java.util.Scanner;

public class Added {
	public static void main(String[] args) {
		int[] arr = {1,5,4,6,2};
		int num;
		
		//遍历初始数组
		System.out.print("初始数组为：");
		for(int i : arr){
			System.out.print(i + " ");
		}
		
		//换行
		System.out.println();
		
		//输入新增的数
		System.out.print("请输入您要新增的数：");
		Scanner in = new Scanner(System.in);
		num = in.nextInt();
		in.close();
		
		// 扩容
		int[] newArr = new int[arr.length + 1];  // 1.新建一个老数组长度+1的新数组
		for (int i = 0; i < arr.length; i++) {
			newArr[i] = arr[i];  // 把每个元素赋值给新数组中
		}
		newArr[arr.length] = num;  // 把没有的数字赋值给新数组中的末尾
		arr = newArr;  // 把新数组的引用地址赋值给老数组
		
		// 遍历输出新数组
		for (int arr_num : arr) {
			System.out.print(arr_num + " ");
		}
	}
}
```
### 3.2. 数组删除
```java
package demo.arr.arrOperation;

import java.util.Scanner;

public class Delete {
	public static void main(String[] args) {
		int[] arr = {1,5,4,6,2};
		int num = 0;// 用户给定
		int index = -1;// 记录下标
		
		System.out.print("初始数组为：");
		for(int i : arr){
			System.out.print(i + " ");
		}
		
		System.out.println();
		
		Scanner input = new Scanner(System.in);
		System.out.println("请输入你要删除的数字：");
		num = input.nextInt();
		input.close();
		
		// 1.查有没有
		for (int i = 0; i < arr.length; i++) {
			if (num == arr[i]) {
				index = i;// 记录存在的下标
				arr[index] = 0;
				break;
			}
		}
		if (index == -1) {
			System.out.println("没有这个数据，无序删除！");
			return;
		}
		
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == 0) {
				continue;
			}
			System.out.print(arr[i] + " ");
		}
	}
}
```
### 3.3. 数组查找
```java
package demo.arr.arrOperation;

public class Lookup {
	public static void main(String[] args) {
		int[] arr = {1,5,4,6,2};
		for(int arr_num : arr){
			System.out.print(arr_num);
		}
	}
}
```
### 3.4. 数组修改
```java
package demo.arr.arrOperation;

import java.util.Scanner;

public class Modify {
	@SuppressWarnings("resource")
	public static void main(String[] args) {
		int[] arr = {1,5,4,6,2};  //初始数组
		int index = -1;  //用来保存数组的下标
		int num = 0;  //用来保存用户输入的数
		
		//输出初始数组
		System.out.print("初始数组为：");
		for(int i=0; i<arr.length; i++){
			if(i != arr.length-1){
				System.out.print(arr[i] + ",");
			}else{
				System.out.print(arr[i]);
			}
		}
		
		System.out.println("\n");
		
		System.out.print("请输入您要修改的数：");
		
		//修改数组
		Scanner in = new Scanner(System.in);
		num = in.nextInt();
		
		//用户输入的数是否在数组里存在，如果不存在那就要告诉用户，如果存在那就要记录这个元素的下标
		for(int i=0; i<arr.length; i++){
			if(num == arr[i]){
				index = i;
				System.out.println("该数在数组中第" + (index+1) + "个位置\n");
				break;
			}
		}
		
		//根据index中的值判断是否存在
		if(index == -1){
			System.out.println("没有该数！");
			return;
		}
		
		//数字
		System.out.print("请输入修改后的数字：");
		arr[index] = in.nextInt();
		
		in.close();
		
		//遍历,输出修改后的数组
		System.out.print("修改后的数组为：");
		for(int i=0; i<arr.length; i++){
			if(i != arr.length-1){
				System.out.print(arr[i] + ",");
			}else{
				System.out.print(arr[i]);
			}
		}
	}
}

```

## 4. 问题4
```java
/*
 * 按照年龄进行排序,冒泡
 * N个数字来排队，两两比较小靠前，
 * 外层循环N-1(需要比较的轮数)
 * 内存循环N-1-i(每轮需要比较的次数)
 */
// Student.java
package demo.arr.bubbleArrayDemo;

public class Student {
	private String name;
  private int age;
  private int score;
  
  public Student(String name, int age, int score) {
    super();
    this.name = name;
    this.age = age;
    this.score = score;
  }
  
  public Student() {
    super();
  }
  
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  
  public int getAge() {
    return age;
  }
  public void setAge(int age) {
    this.age = age;
  }
  
  public int getScore() {
    return score;
  }
  public void setScore(int score) {
    this.score = score;
  }
  
  @Override
  public String toString() {
    return "Student [name=" + name + ", age=" + age + ", score=" + score + "]";
  }
}

// TestArray.java
/*
 * 按照年龄进行排序,冒泡
 * N个数字来排队，两两比较小靠前，
 * 外层循环N-1(需要比较的轮数)
 * 内存循环N-1-i(每轮需要比较的次数)
 */

package demo.arr.bubbleArrayDemo;

public class TestArray {
  public static void sort(Student[] stus){
    for(int i=0;i<stus.length-1;i++){
      for(int j=0;j<stus.length-1-i;j++){
        //先从学生对象中获取该学生的年龄
        if(stus[j].getAge()>stus[j+1].getAge()){
          //交换位置
          Student temp=stus[j];
          stus[j]=stus[j+1];
          stus[j+1]=temp;
        }
      }
    }
  }
  
  public static void main(String[] args) {
    Student[] stus = new Student[5];//保存学生信息的数组
    stus[0]=new Student("aa",20,80);
    stus[1]=new Student("bb",22,78);
    stus[2]=new Student("cc",18,90);
    stus[3]=new Student("dd",25,82);
    stus[4]=new Student("ee",24,81);
    System.out.println("排序前:");
    for (Student student : stus) {
        System.out.println(student);
    }
    sort(stus);//排序
    System.out.println("排序后:");
    for (Student student : stus) {
        System.out.println(student);
    }
  }
}
```

## 5. 问题5
```java
/*
 *  实现接收三个班级的各四名学员的成绩信息，然后计算每个班级学员的平均分
 *  二重循环，外层循环控制班级的数量、内层循环控制每个班级的学员数量
 */

package demo.ease.average;

import java.util.Scanner;

public class Average {
  public static void main(String[] args){
    int classNum = 3; // 班级数目
    int stuNum = 4; // 学生数目
    double sum = 0; // 成绩总和
    double avg = 0; // 平均分
    Scanner input = new Scanner(System. in);
    for (int i = 1; i <= classNum ; i ++) { // 外层循环控制班级数
      sum = 0; // 成绩总和归0
      System. out.println( "***请输入第" + i + "个班级的成绩***" );
      for ( int j = 1; j <= stuNum ; j ++) { // 内层循环控制每个班级学员数
        System. out.print( "第" + j + "个学员的成绩：" );
        int score = input .nextInt(); // 获取输入的成绩
        sum = sum + score; // 成绩累加求和
      }
      avg = sum / stuNum; // 计算平均分
      System. out.println( "第" + i + "个班级学员的平均分是：" + avg + "\n");
    }
    input.close();
  }
}
```

## 6. 问题6
```java
/*
 *  用特殊的加法计算用户输入的三个数之和
 *  
 *  5+3+2=151022
 *  9+2+4=183652
 *  8+6+3=482466
 *  5+4+5=202541
 *  7+2+5=？
 */

package demo.ease.plusSpecial;

import java.util.Scanner;

public class PlusSpecial {
	public static void main(String[] args) {
		System.out.println("***********特殊的加法计算***********");
		
		//定义变量
		int num1 = 0, 
			num2 = 0, 
			num3 = 0;  //用来保存用户输入的三个数
		int n = 0;  //用来保存用户需要计算的次数
		int res = 0;  //用来保存计算结果
		
		String answer = "";  //保存重新输入的y/n
		
		boolean isTrue = false;  //用来判断执行次数
		
		Scanner in = new Scanner(System.in);  //获取输入
		
		//循环控制输入次数
		do{
			System.out.print("请问您需要进行几次计算：");
			
			n = in.nextInt();  //获取用户输入的次数
			
			System.out.println("计算开始了！\n");
			
			for(int i=1; i<=n; i++){
				System.out.println("第" + i + "次计算");
				
				System.out.print("请输入三个正整数，用空格隔开：");
				
				num1 = in.nextInt();
				num2 = in.nextInt();
				num3 = in.nextInt();  //获取用户输入的三个数
				
				//根据特殊公式计算结果
				res = Integer.parseInt(Integer.toString(num1*num2) + Integer.toString(num1*num3) + Integer.toString((num1*num2)+(num1*num3)-num2));
				
				//输出计算结果
				System.out.println(num1 + " + " + num2 + " + " + num3 + " = " + res + "\n");
			}
			
			//让用户判断是否继续执行
			System.out.print("是否要继续进行计算?(y/n)：");
			
			answer = in.next();  //获取用户输入的（y/n）
			
			//判断
			if (answer.equals("y")){  //“==”比较两个变量本身的值，即两个对象在内存中的首地址；“equals()”比较字符串中所包含的内容是否相同。
				isTrue = true;
			}else{
				isTrue = false;
			}
		}while(isTrue);
		
		//程序结束
		System.out.println("计算结束！");
		
		in.close();  //关闭键盘
	}
}
```

## 7. 问题7
> 用方法比较两个数的大小
```java
package demo.ease.testMax;

public class TestMax {
	//主方法
	public static void main(String[] args) {
		int i = 5;  //第一个数
		int j = 2;  //第二个数
		//调用方法
		int k = max(i, j);
		
		//输出
		System.out.print("最大值是：" + k);
	}
	
	//返回两个整数变量较大的值
	public static int max(int num1, int num2){
		int result = 0;  //用来保存结果
		
		//比较大小
		if(num1>num2){
			result = num1;
		} else {
			result = num2;
		}
		
		//返回结果
		return result;
	}
}
```

## 8. 问题8
### 8.1. sleep方法
```java
package demo.oop.sleep;

public class Sleep2 {
	//有一个会让人睡觉的东西
	void sleepSth(SplleWay slp){
		slp.speepWay();
    }
	
	//主方法（程序入口）
	public static void main(String[] args) {
		SplleWay01 slpy1 = new SplleWay01();  //实例化第一种睡觉方法类，创建slpy1对象
		SplleWay02 slpy2 = new SplleWay02();  //实例化第二种睡觉方法类，创建slpy2对象
		SplleWay03 slpy3 = new SplleWay03();  //实例化第三种睡觉方法类，创建slpy3对象
		
    Sleep2 slp2 = new Sleep2();  //实例化睡觉类，创建slp2对象
    
    //调用会让人睡觉的方法
    slp2.sleepSth(slpy1);
    slp2.sleepSth(slpy2);
    slp2.sleepSth(slpy3);
	}
}

//一个描述睡觉的接口接口
interface SplleWay {
	//声明抽象方法
	public void speepWay();
}

//第一种睡觉方法类调用接口
class SplleWay01 implements SplleWay {
	//对接口中的抽象方法进行具体实现
  public void speepWay() {
      System.out.println("我要侧着睡");
  }
}

//第二种睡觉方法类调用接口
class SplleWay02 implements SplleWay {
	//对接口中的抽象方法进行具体实现
	public void speepWay() {
		System.out.println("我要仰着睡");
  }
}

//第二种睡觉方法类调用接口
class SplleWay03 implements SplleWay {
	//对接口中的抽象方法进行具体实现
	public void speepWay() {
		System.out.println("我想怎么睡就怎么睡");
	}
}
```
### 8.2. 数山羊
```java
package demo.oop.sleep;

import java.util.Scanner;

public class Sleep {
	public static void main(String[] args) {	
		int n = (int)(Math.random()*3+1);
		
		switch(n){
			case 1:
				SleepProcess slp1 = new SleepWay1();
				slp1.beginSleep();
				slp1.sleeping();
				slp1.doomsday();
			case 2:
				SleepProcess slp2 = new SleepWay2();
				slp2.beginSleep();
				slp2.sleeping();
				slp2.doomsday();
			case 3:
				SleepProcess slp3 = new SleepWay3();
				slp3.beginSleep();
				slp3.sleeping();
				slp3.doomsday();
		}
	}
}

abstract class SleepProcess{
	public int n = 0;  //你的小羊
	public int i;  //我是一个小循环
	public int myRadom;  //随机
	
	@SuppressWarnings("resource")
	public void beginSleep(){
		System.out.println("哇咔咔，我要睡觉了，我的被窝想我了");
		System.out.println("==*  一个被窝和枕头的故事   *== \n");
		System.out.print("嗯……数几只羊好呢？  ");
		
		//到底几只羊了
		myRadom = (int)(Math.random()*5+1);
		
		//你要干什么
		Scanner in = new Scanner(System.in);
		n = in.nextInt() + myRadom;
		
		for(i=0; i<n; i++){
			if(i<n-1){
				System.out.print((i+1) + "只羊" + ",");
			}else{
				System.out.print((i+1) + "只羊…………\n");
			}
		}
		System.out.println("\n（模糊眼）好像不太对，重新数吧。。。");
		System.out.println("呼噜噜，呼噜噜Zzzz");
		System.out.println("Zzzz");
		System.out.println("Zz..");
		System.out.println("......\n");
	}
	
	//声明睡觉方法
	public abstract void sleeping();
	
	@SuppressWarnings("resource")
	public void doomsday(){
		String answer = "";  //y/n
		
		System.out.println("\n^*)%$@~");
		System.out.println("什么？要起床！\n");
		System.out.println("#$!/*+#%&");
		System.out.println("纳尼，卧槽，什么，世界末日了\n");
		System.out.println("…………………………");
		System.out.println("可是宝宝还想睡，宝宝不想起床\n");
		System.out.print("//*-&(翻译：到底起不起床) y/n：  ");
		
		Scanner in = new Scanner(System.in);
		answer = in.nextLine();
		
		if(answer.equals("n")){
			System.out.println("\n(决心脸)我要睡到天长地久，我要睡到海枯石烂！");
			System.out.println("呼噜噜，呼噜噜Zzz..");
			System.out.println("...............\n");
			System.out.println("嘭！！!!!");
			System.out.println("end~   ^_^");
		}else{
			System.out.println("\n(慌张脸)救命啊，救命啊，世界末日啦！！！");
			System.out.println("...............\n");
			System.out.println("嘭！！!!!");
			System.out.println("end~   ^_^");
		}
		
		System.out.println("------------------------------------\n");
		
		return;
	}
	
	//睡觉睡觉
	public void sleep(){
		//开始睡觉啦
		beginSleep();
		//你想怎么睡就怎么睡
		sleeping();
		//宝宝不想起床
		doomsday();
	}
}

//侧着睡
class SleepWay1 extends SleepProcess{
	public void sleeping(){
		System.out.println("我要侧着睡");
		System.out.println("敖！搁到肩膀了");
		System.out.println("呼呼……");
	}
}

//仰着睡
class SleepWay2 extends SleepProcess{
	public void sleeping(){
		System.out.println("我要仰着睡");
		System.out.println("面壁思过ing……");
		System.out.println("我在修行，练气，不，已经化神了");
	}
}

//我想怎么睡就怎么睡
class SleepWay3 extends SleepProcess{
	public void sleeping(){
		System.out.println("我想怎么睡就怎么睡");
		System.out.println("闭关修炼ing");
		System.out.println("嗯哼……好爽");
	}
}
```

## 9. 问题9
> 定义方法
```java
package demo.oop.studentMethod;

public class StudentMethod {
	//定义变量
	public String name;  //名字
	public String major;  //专业
	public int age;  //年龄
	public char sex;  //性别
	
	//构造方法，给StudentMethod类赋默认值（初始化）
	public StudentMethod(){
		name = "Anne";  //名字
		major = "IOS";  //专业
		age = 3;  //年龄
		sex = '女';
	}	

	//自我介绍
	public void StudentTest(String name, String major, int age, char sex){
		System.out.println("大家好！我叫" + name + "，一个乐观的" + sex + "生，" + "今年" + age + "岁了，我现在主修的专业是" + major);
	}
	
	//主方法（程序入口）
	public static void main(String[] args) {
		StudentMethod stu1 = new StudentMethod();  //new一个学生对象（实例化一个stu1）
		stu1.StudentTest(stu1.name, stu1.major, stu1.age, stu1.sex);  //调用自我介绍的方法
		
		StudentMethod stu2 = new StudentMethod();  //new一个学生对象（实例化一个stu1）
		stu2.major = "Android";  //给实例化的学生对象的major属性赋值
		stu2.sex = '男';  ////给实例化的学生对象的sex属性赋值
		stu1.StudentTest(stu1.name, stu2.major, stu1.age, stu2.sex);  //调用自我介绍的方法
	}
}
```