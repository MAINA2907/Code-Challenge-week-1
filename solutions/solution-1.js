function studGrade(input) {

    if (input>=100){

        return "Invalid" ;} 

    if (input>=79){

        return "A";

    }else if(input<79 && input>=60){

        return "B";

    }else if(input<=59 && input>=49){

        return "C";

    }else if(input<=49 && input>=40){

        return "D";

    }else{
        return "E";
    }
}

studGrade () //where we call out our function