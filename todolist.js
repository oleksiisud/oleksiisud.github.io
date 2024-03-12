document.addEventListener('DOMContentLoaded', function() {
      const tasksContainer = document.getElementById('tasks');
      const addTaskForm = document.getElementById('addTaskForm');

      let tasks = [];

      function renderTasks() {
        tasksContainer.innerHTML = '';
        tasks.forEach(function(task, index) {
          const taskElement = document.createElement('div');
          taskElement.innerHTML = `
            <div class="task ${task.completed ? 'completed' : ''}">
              <input type="checkbox" class="checkmark" id="task${index}" ${task.completed ? 'checked' : ''}>
              <label for="task${index}" class="priority-${task.priority}">${task.name} - Due: ${task.dueDate}</label>
              <button class="button dangerButton smButton deleteButton" data-index="${index}">Delete</button>
            </div>
          `;
          tasksContainer.appendChild(taskElement);

          const checkbox = taskElement.querySelector(`#task${index}`);
          checkbox.addEventListener('change', function() {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
            if (tasks[index].completed) {
              celebrate();
            }
          });

          const deleteBtn = taskElement.querySelector('.deleteButton');
          deleteBtn.addEventListener('click', function() {
            tasks.splice(index, 1);
            renderTasks();
          });
        });
      }

      function addTask(name, dueDate, priority) {
        tasks.push({
          name: name,
          dueDate: dueDate,
          completed: false,
          priority: priority
        });
        renderTasks();
      }

      addTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        addTask(taskName, dueDate, priority);
        addTaskForm.reset();
      });

      function celebrate() {
        const confs = document.querySelectorAll('.conf');
        confs.forEach(task => {
          task.classList.add('confetti');
          setTimeout(() => {
            task.classList.remove('confetti');
          }, 1000);
        });
      }

      renderTasks();
    });