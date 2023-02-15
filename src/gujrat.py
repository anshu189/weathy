import pickle


# FOR ADDING DATA
def add_data():
    f = open("student.dat","ab")
    print("Append Data")
    mrks = int(input("Enter your Marks: "))
    nme = input("Enter your Name: ")
    dta={'no':mrks,'name':nme}
    pickle.dump(dta,f)
    f.close()

# DISPLAYING DATA
def display_data():
   f = open("student.dat","rb")
   print("Data stored in File.\n")
   print("*"*30)
   while True:
      try:
           dta = pickle.load(f)
           print("Student Name: ",dta['name'])
           print("Student Marks:",dta['no'])
           print("."*30)
      except Exception:
        break
   print("*"*30)
   f.close()

# SEARCHING DATA
def search_data():
    f = open("student.dat","rb")
    ch = input("Enter student name to get marks: ")
    flag=True
    while flag:
        dta = pickle.load(f)
        print()
        if dta['name']==ch:
            print("Student Name: ",dta['name'])
            print("Student Marks: ",dta['no'])
            flag = False
            break
    if flag==True:
        print("Data not found!")

# MAIN PROGRAM FUNCTION
def program():
    print("1. Add a record\n2. Display a record\n3. Search a record\n4. Exit")
    choice = int(input("Select any one option: "))
    if choice == 1:
        add_data()
        program()

    elif choice == 2:
        display_data()
        program()

    if choice == 3:
        search_data()

    elif choice == 4:
        exit(1)


# program()



ch=input("")